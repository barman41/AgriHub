const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Seller = require('./Seller');
const Category = require('./Category');

const Product = sequelize.define('Product', {
  ProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Description: DataTypes.TEXT,
  Price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  Stock: { type: DataTypes.INTEGER, defaultValue: 0 },
});

Product.belongsTo(Seller, { foreignKey: 'SellerID' });
Product.belongsTo(Category, { foreignKey: 'CategoryID' });

module.exports = Product;
