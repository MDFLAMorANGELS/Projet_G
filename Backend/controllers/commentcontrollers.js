const Comment = require('../models/Comment');

exports.getAllComment = async (req, res, next) => {
    try {
        const comment = await comment.findAll();
        res.status(200).json(comment)
        console.log(comment);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewComment = async (req, res , next) => {
    try {
        let {comment} = req.body;
    let newComment = new Comment(req.body.data, req.userID,req.body.ID);
    await newComment.save();

    res.status(201).json({message: 'Comment created'});
    } catch (error) {
        console.log(error);
        next(error);
    }
};