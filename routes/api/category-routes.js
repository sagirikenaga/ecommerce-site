const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get route for retrieving list of all categories
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    if (!categoryData){
      res.status(400).json({message: 'No category data.'});
      return;
    }
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json({message: `Internal server error: ${err}`});
    }
});

//get route for retrieving 1 category by its id value 
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!categoryData){
      res.status(400).json({message: 'No category data.'});
      return;
    }
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json({message: `Internal server error: ${err}`});
    }
});

//post route for posting new category using category name, id automatically assigned
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

//put route for updating category name using id 
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
       id: req.params.id, 
      }
    }
  );
  
  return res.json({message: 'Category succcessfully updated.'});
});

//delete route for deleting category by id
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    }
  });

  return res.json({message: 'Category successfully deleted.'});
});

module.exports = router;
