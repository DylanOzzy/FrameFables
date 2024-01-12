const router = require('express').Router();
const { Story, User } = require('../models');
const isAuth = require('../utils/auth');
const { getWeek } = require('date-fns');

function getMuseImage() {
  const images = ['backgroundphoto.jpg', 'photo2.jpg', 'photo3.jpg'];
  const currentWeek = getWeek(new Date());
  const imageIndex = currentWeek % images.length; 
  return images[imageIndex];
};

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const stories = storyData.map((story) => story.get({ plain: true }));
    const museImage = getMuseImage();

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      museImage,
      stories, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/story/:id', async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const story = storyData.get({ plain: true });

    res.render('story', {
      ...story,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', isAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Story }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

//links match