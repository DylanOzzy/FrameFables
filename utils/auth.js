const bcrypt = require('bcrypt');

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
}

module.exports = { isAuth, login, logout };
