# Module 13 Challenge: E-commerce Back End

## Description

This project was build so that a retail store may keep track of their inventory in a virtual setting. The user may use this code to access their SQL database and access data on their products, categories, and tags. With the products, the user can keep track of the product name, price, stock, and associated categories and tags regarding the product. This project allowed me to apply my knowledge learned about SQL and sequelize to understand the backend data storage used in some websites. 

## Installation

Clone/fork this repository at https://github.com/sagirikenaga/ecommerce-site. Then run the commands: npm i, then mysource -u root -p and enter in your password. To seed the data, run the command seeds/index.js. Lastly, run the command npm start to initialize. The data can be accessed using Insomnia.

## Usage

This project is used by following the installation process described above, then accessing the data through Insomnia. With insomnia, using the localhost and PORT described in the server.js file, the different routes can be accessed. For example, in order to access the page containing all the category data, the link http://localhost:3001/api/categories/ can be inputted into the html bar and "GET" can be selected. The results will display on the right. In order to add either a category, tag, or product, the user may input the objects using a POST route. The PUT and DELETE routes may also be used in order to update and delete an item, respectively. For more information, please view the video linked below.

## Video Demonstration

Link to the live demonstration video can be found here: https://youtu.be/A5NTuYXhwfM.

## Credits

Sagiri Ikenaga
