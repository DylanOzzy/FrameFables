const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING, // use website like 'imgur.com' for image hosting... url to image.
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);

Image.hasMany(Story, {
    foreignKey: 'image_id',
    onDelete: 'CASCADE', // if images is deleted, all story posts will be deleted as well.
  });

module.exports = Image;