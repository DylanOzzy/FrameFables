const router = require('express').Router();
const userRoutes = require('./userRoutes');
const storyRoutes = require('./storyRoutes');
//const imageRoutes = require('./imageController');
//const storyController = require('./storyController');

router.use('/users', userRoutes);
router.use('/stories', storyRoutes);
//router.use('/images', imageRoutes);

module.exports = router;

//links match
