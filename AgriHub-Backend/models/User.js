const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Email: { type: DataTypes.STRING, unique: true, allowNull: false },
  Password: { type: DataTypes.STRING, allowNull: false },
  Phone: DataTypes.STRING,
  Address: DataTypes.TEXT,
});

module.exports = User;
