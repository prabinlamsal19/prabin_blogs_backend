const Post = require("../models/Post"); 
const router = require("express").Router(); 

router.get("/", async (req, res) => { 
    try {
      const posts = await Post.find(); // Retrieve all posts from the database
      return res.status(200).json({ success: true, posts });
    } catch (error) { 
      console.error(error);
      return res.status(500).json({ success: false, message: "An error occurred while fetching posts" });
    }
  }); 

  module.exports = router;
