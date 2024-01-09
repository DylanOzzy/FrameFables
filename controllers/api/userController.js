const bcrypt = require('bcrypt');
const { User }= require('../../models/User');
const router = require('express').Router();

router.post('/login', async (req, res) => {
    if (userAuthenticated) {
      req.session.logged_in = true;
      req.session.user_id = user.id;
      res.redirect('/stories');
    } else {
        res.status(400).json(err);
      // handle login failure
    }
  });
  
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  });
  

module.exports = router;
