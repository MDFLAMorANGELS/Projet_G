const Comment = require('../models/Comment');

exports.getAllComment = async (req, res, next) => {
    try {
        const comment = await Comment.findAll();

        res.status(200).json({comment})
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewComment = async (req, res , next) => {
    try {
        let { comment } = req.body;
    let comment = new Comment(comment);

    comment = await comment.save();

    res.status(201).json({message: 'Comment created'});
    } catch (error) {
        console.log(error);
        next(error);
    }
};