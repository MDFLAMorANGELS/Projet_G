const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.getAllPost = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        const comments = await Comment.findAll();
        //console.log(comments)
        comments[0].forEach(comment => {
            const index = posts[0].findIndex(post => post.ID === comment.post_ID)
            if (index >= 0){
            //console.log(index)
            posts[0][index].comments ? posts[0][index].comments.push(comment):posts[0][index].comments=[comment]
        }
        });
        res.status(200).json(posts[0])
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewPost = async (req, res , next) => {
    try {
        //console.log(req.file)
        let image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        let { title, data} = req.body;
    let post = new Post(title, data, req.userID, image);
    const createdPost = await post.save();
    post.ID = createdPost[0].insertId
    const newPost = await Post.findById(post.ID)
    //console.log(newPost);
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

exports.deletePost = async (req, res, next) => {
    try {
        let postId = req.params.id;
        await Post.deletePost(postId);
        res.status(200).json('post Deleted');
    } catch (error) {
        console.log(error);
        next(error);
    }
}