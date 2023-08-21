const mongoose = require("mongoose"); 

const PostSchema = new mongoose.Schema( 
   { 
    postId: { 
        type: Number, 
        required: true,
    }, 
    title: { 
        type: String, 
        required: true,
    }, 
    readTime: { 
        type: Number,
    }, 
    content: { 
        type: String, 
    },
   } ,
   {timestamps: true}
); 

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;