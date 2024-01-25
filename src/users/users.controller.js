const users = require("../data/users-data");

const userExists = (req, res, next) => {
    const { userId } = req.params;
    const foundUser = users.find((user) => user.id === Number(userId));
    if(foundUser) {
        res.locals.user = foundUser;
        return next();
    }
    next({
        status: 404,
        message: `User id not found ${userId}`,
    });
};

const list = (req, res) => {
    res.json({ data: users });
}

const read = (req, res) => {
    res.json({ data: res.locals.user });
}

module.exports = {
    read: [userExists, read],
    list,
    userExists,
};