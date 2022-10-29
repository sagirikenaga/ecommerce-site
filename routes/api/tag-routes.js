const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get route that retrieves all tags 
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product,
      through: {
        model: ProductTag,
        attributes: ['id','tag_id','product_id'],
      }}],
    });
    if(!tagData){
      res.status(400).json({message: 'No tag data.'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({message: `Internal server error: ${err}`});
  }
});

//get route that retrieves 1 tag by its id
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product,
      through: {
        model: ProductTag,
        attributes: ['id', 'tag_id','product_id'],
      }}],
    });
    if (!tagData){
      res.status(400).json({message: 'No tag data for this id.'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({message: `Interval server error: ${err}`});
  }
});

//post route that creates a new tag using name, id automatically assigned
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

//put route that updates tag by its id
router.put('/:id', async (req, res) => {
  // update a tag by its `id` value
  const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
       id: req.params.id, 
      }
    }
  );
  
  return res.json({message: 'Tag succcessfully updated.'});
});

// delete route that deletes tag by its id
router.delete('/:id', async (req, res) => {
  // delete a tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  });

  return res.json({message: 'Tag successfully deleted.'});
});

module.exports = router;
