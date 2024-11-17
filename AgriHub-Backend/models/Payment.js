const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');

const Payment = sequelize.define('Payment', {
  PaymentID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  PaymentStatus: { type: DataTypes.ENUM('Pending', 'Paid on Delivery'), defaultValue: 'Pending' },
});

Payment.belongsTo(Order, { foreignKey: 'OrderID' });

module.exports = Payment;
