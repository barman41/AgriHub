const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Seller = sequelize.define('Seller', {
  SellerID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  ContactInfo: DataTypes.STRING,
});

module.exports = Seller;
