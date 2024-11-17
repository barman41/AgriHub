const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Order = sequelize.define('Order', {
  OrderID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  OrderDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Status: { type: DataTypes.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'), defaultValue: 'Pending' },
  TotalAmount: DataTypes.DECIMAL(10, 2),
});

Order.belongsTo(User, { foreignKey: 'UserID' });

module.exports = Order;
