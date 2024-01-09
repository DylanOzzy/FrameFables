const sequelize = require('../config/connection');
const { User, Story } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const story of storyData) {
    await Story.create({
      ...story,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


/*const sequelize = require('../config/connection');
const { User, Story, Image } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');
const imageData = require('./imageData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const images = await Image.bulkCreate(imageData, {
    returning: true,
  });

  for (const story of storyData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    await Story.create({
      ...story,
      user_id: randomUser.id,
      image_id: randomImage.id,
    });
  }

  process.exit(0);
};

seedDatabase();*/
