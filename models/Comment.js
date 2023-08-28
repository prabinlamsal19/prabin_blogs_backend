const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema(
   {
    comId: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
    },
    userProfile: { 
        type: String, 
    },
    text: {
        type: String,
    },
   },
   { timestamps: true }
);

const CommentSchema = new mongoose.Schema(
   {
    userId: { 
        type: String, 
   }, 
   postId: { 
         type: Number
   } , 
    comId: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
    },
    text: {
        type: String,
    },
    userId: { 
        type: String,
    }, 
    userProfile: { 
        type: String,
    },
    replies: [ReplySchema], // Use an array of subdocuments
   },
   { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
