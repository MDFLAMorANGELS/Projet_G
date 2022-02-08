const Comment = require('../models/Comment');

exports.getAllComment = async (req, res, next) => {
    try {
        const comment = await Comment.findAll();
        res.status(200).json(comment[0])
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewComment = async (req, res , next) => {
    try {
    let newComment = new Comment(req.body.data, req.userID,req.body.ID);
    let result = await newComment.save();
    console.log(result)
    let comment = await Comment.findById(result[0].insertId)

    res.status(201).json({message: 'Comment created', comment});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.deleteComment = async (req, res, next) => {
    try {
        let commentID = req.params.id;
        await Comment.deleteComment(commentID);
        res.status(200).json('comment Deleted');
    } catch (error) {
        console.log(error);
        next(error);
    }
}