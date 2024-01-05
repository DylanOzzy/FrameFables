const express = require('express');
const router = express.Router();
const { Story } = require('../models'); 

router.post('/create', async (req, res) => {
    try {
        const newStory = await Story.create({ ...req.body, userId: req.session.userId });
        res.json(newStory);
    } catch (error) {
        res.status(500).json({ message: "Failed to create story", error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const story = await Story.findByPk(req.params.id);
        if (!story) {
            return res.status(404).json({ message: "Story not found" });
        }
        res.json(story);
    } catch (error) {
        res.status(500).json({ message: "Error fetching the story", error });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const [updated] = await Story.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedStory = await Story.findByPk(req.params.id);
            return res.status(200).json({ message: "Story updated successfully", story: updatedStory });
        }
        throw new Error('Story not found');
    } catch (error) {
        res.status(500).json({ message: "Error updating the story", error: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const result = await Story.destroy({
            where: { id: req.params.id }
        });
        if (result === 0) {
            return res.status(404).json({ message: "Story not found or already deleted" });
        }
        res.json({ message: "Story deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the story", error });
    }
});

module.exports = router;
