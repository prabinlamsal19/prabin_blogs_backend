const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// GET endpoint to retrieve comments for a specific postId
router.get("/", async (req, res) => { 
    const postId = req.body.postId; // Get postId from the data 
    console.log("below is the postID in a get request"); 
    console.log(postId) ;
    try {
        // Retrieve comments with matching comId (postId)
        const comments = await Comment.find({ postId: postId });
        return res.status(200).json({ success: true, comments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while fetching comments" });
    }
});

module.exports = router;
