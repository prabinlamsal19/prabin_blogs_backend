const Post = require("../models/Post");
const router = require('express').Router();

router.post("/", async (req, res) => { 
    try {
        const {title, readTime, content, highlight } = req.body; // Assuming the request body contains these fields
        // Create a new Post instance using the Post model
        const postId = await Post.countDocuments(); 
        const newPost = new Post({
            postId,
            title,
            readTime,
            content, 
            highlight
        });
        
        await newPost.save();
        
        return res.status(201).json({ success: true, message: "Post created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while creating the post" });
    }
});

module.exports = router;
