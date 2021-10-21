const Post = require('../models/Post');

exports.getAllPost = async (req, res, next) => {
    try {
        const post = await Post.findAll();

        res.status(200).json({post})
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewPost = async (req, res , next) => {
    try {
        let { title, data} = req.body;
    let post = new Post(title, data);

    post = await post.save();

    res.status(201).json({message: 'Post created'});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id;

        let [ post, _] = await Post.findById(postId);

        res.status(200).json({post});
    } catch (error) {
        console.log(error);
        next(error);
    }
}