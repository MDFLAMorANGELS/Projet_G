const User = require('../models/User');

exports.signup = async (req, res , next) => {
    try {
        let { username, email, password} = req.body;
    let user = new User(username, email, password);

    user = await user.save();

    res.status(201).json({message: 'User created '});
    } catch (error) {
        console.log(error);
        next(error);
    }
};