const { Story } = require('../../models');
const router = require('express').Router();
const auth = require('../../utils/auth');

// create a new story
router.post('/create', auth, async (req, res) => {
    try {
        const newStory = await Story.create({ ...req.body, userId: req.session.user.id });
        res.status(201).json(newStory);
    } catch (error) {
        res.status(500).json({ message: "Failed to create story", error });
    }
});

// read a single story by id
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

// updates a story by id
router.put('/update/:id', auth, async (req, res) => {
    try {
        const updated = await Story.update(req.body, { where: { id: req.params.id } });
        if (updated[0] === 0) {
            return res.status(404).json({ message: "Story not found or not updated" });
        }
        res.json({ message: "Story updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating the story", error });
    }
});

// delete a story by id
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const deleted = await Story.destroy({ where: { id: req.params.id } });
        if (deleted === 0) {
            return res.status(404).json({ message: "Story not found or already deleted" });
        }
        res.json({ message: "Story deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the story", error });
    }
});

module.exports = router;
