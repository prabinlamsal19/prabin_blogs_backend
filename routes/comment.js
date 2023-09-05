const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.post("/:postId", async (req, res) => {
    const postIdParam = req.params.postId;  
    const postId = parseInt(postIdParam) ;
    //access this postId and store on the basis of this
    //to prevent redundancy of comments 

        await Comment.deleteMany({ postId: postId });
    // only now, we add the data 
    try {
        const commentDataArray = req.body;
        // Loop through each comment data in the array
        for (const commentData of commentDataArray) {
            const {userId, comId, fullName, avatarUrl, text, replies } = commentData;
            // Create a new Comment instance using the Comment model
            const newComment = new Comment({
                postId,
                userId, 
                comId,
                fullName,
                avatarUrl,
                text,
                replies, 
            }); 
            await newComment.save();
        }

        return res.status(201).json({ success: true, message: "Comments created successfully", });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while creating the comments" });
    }
});

module.exports = router;