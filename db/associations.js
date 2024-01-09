const User = require('../models/User');
const Image = require('../models/Image');
const Story = require('../models/Story');

Story.belongsTo(User, {
  foreignKey: 'user_id',
});

Story.belongsTo(Image, {
  foreignKey: 'image_id',
});

Image.hasMany(Story, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE',
});

User.hasMany(Story, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Image, Story };