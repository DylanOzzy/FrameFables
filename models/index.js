const User = require('./User');
const Story = require('./Story');
const Image = require('./Image');

User.hasMany(Story, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Story.belongsTo(User, {
  foreignKey: 'user_id'
});

Story.belongsTo(Image, {
  foreignKey: 'image_id',
});

Image.hasMany(Story, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Image, Story };