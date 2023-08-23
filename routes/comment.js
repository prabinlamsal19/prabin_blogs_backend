const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.post("/:postId", async (req, res) => {
    console.log("The comment post request has been received"); 
    const postId = req.params.postId;  
    console.log("below is the post id in the post request"); 
    console.log(postId); 
    //access this postId and store on the basis of this
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
                replies, // Array of reply objects
            });

            // Save the new comment to the database
            await newComment.save();
        }

        return res.status(201).json({ success: true, message: "Comments created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while creating the comments" });
    }
});

module.exports = router;
