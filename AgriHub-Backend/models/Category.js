const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  CategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Description: DataTypes.TEXT,
});

module.exports = Category;
