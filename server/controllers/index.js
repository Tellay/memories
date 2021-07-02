const Posts = require("../models/post");

const getPosts = async (req, res) => {
    const allPosts = await Posts.find();
    if(allPosts.length > 0) return res.status(200).json(allPosts);
    res.status(404).json({ msg: `Something went wrong. (${allPosts.length})` });
}

const createPost = (req, res) => {
    const { creator, title, message, tags, selectedFile } = req.body;
    if((!creator) || (!title) || (!message) || (!selectedFile)) return res.status(401).json({ msg: "Empty spaces." });
    
    const NewPost = Posts.create({ creator, title, message, tags, selectedFile });
    res.status(200).json(NewPost);
}

module.exports = { getPosts, createPost };