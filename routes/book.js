const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

const Book = sequelize.define('Book', {
    // Our primaryKey, book id, our unique identifier
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  
    // A column for the title of our book
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    // A column for the author name 
    authorName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

// `sequelize.define` also returns the model
console.log(Book === sequelize.models.Book); // true

module.exports = {
    Book,
    sequelize,
};