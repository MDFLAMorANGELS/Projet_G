const Post = require('../models/Post');

exports.getAllPost = async (req, res, next) => {
    try {
        const post = await Post.findAll();
        res.status(200).json(post[0])
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewPost = async (req, res , next) => {
    try {
        let { title, data} = req.body;
    let post = new Post(title, data, req.userID);

    const createdPost = await post.save();
    post.ID = createdPost[0].insertId
    const newPost = await Post.findById(post.ID)
    console.log(newPost);
    res.status(201).json({newPost:newPost[0][0]});
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