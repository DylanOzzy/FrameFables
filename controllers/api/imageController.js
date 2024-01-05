const { Image } = require('../models');
const router = require('express').Router();

// upload a new image
router.post('/upload', async (req, res) => {
    try {
        const newImage = await Image.create({ ...req.body });
        res.status(201).json(newImage);
    } catch (error) {
        res.status(500).json({ message: "Error uploading image", error });
    }
});

// view all images
router.get('/gallery', async (req, res) => {
    try {
        const images = await Image.findAll();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: "Error fetching images", error });
    }
});

module.exports = router;
