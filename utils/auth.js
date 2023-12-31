/*const bcrypt = require('bcrypt');

function isAuth(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.status(401).send('You are not authorized to view this page');
    }
}

async function login(req, username, password) {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user; 
        return true;
    }
    return false;
}

function logout(req) {
    req.session.destroy();
}*/

const isAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
};

module.exports = isAuth;
