// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

//Product Model setup & rules
Product.init(
  {
      id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      product_name:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
      price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 10,
      validate: {
      isDECIMAL: true,
     }
    },
      stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
      category_id:{
      type: DataTypes.INTEGER,
      references: {
      model: 'category',
      key: 'id',
     }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
