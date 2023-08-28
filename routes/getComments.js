const router = require('express').Router();
const Comment = require('../models/Comment'); 

router.get("/:postId", async (req, res) => {
    const postIdParam = req.params.postId;  
    const postId = parseInt(postIdParam);

    try {
        // Find all comments with the given postId
        const existingComments = await Comment.find({ postId });

        return res.status(200).json({ success: true, comments: existingComments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while fetching comments" });
    }
});

module.exports = router;

