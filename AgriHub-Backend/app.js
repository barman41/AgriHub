const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes'); // Example for products

const app = express();
app.use(bodyParser.json());

// Define routes
app.use('/products', productRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch(error => console.log('Error connecting to the database:', error));
