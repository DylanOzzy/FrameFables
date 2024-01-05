const router = require('express').Router();

const userRoutes = require('./userController');
const imageRoutes = require('./imageController');
const storyRoutes = require('./storyController');

router.use('/users', userRoutes);
router.use('/images', imageRoutes);
router.use('/stories', storyRoutes);

module.exports = router;
