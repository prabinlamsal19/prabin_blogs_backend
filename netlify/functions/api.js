const express = require("express"); 
const app = express(); 
const mongoose = require("mongoose"); 
const postRoute = require("../../routes/post"); 
const commentRoute = require("../../routes/comment");
const getPostsRoute = require("../../routes/getPosts"); 
const getCommentsRoute = require("../../routes/getComments"); 
const morgan = require('morgan');
const helmet = require('helmet');
const cors= require('cors')
const dotenv = require("dotenv"); 
const serverless = require('serverless-http'); 
const getTestsRoute = require("../../routes/getTest"); 


exports.handler = function async(event , context) { 
    app.use(cors()); 
    app.options('*', cors()); 
    app.use(function (req, res, next) {

        res.setHeader('Access-Control-Allow-Origin', '*');
      
      
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      
      
        res.setHeader('Access-Control-Allow-Credentials', true);
      
        next();
      });
    dotenv.config(); 
    mongoose.set('strictQuery', true);
    mongoose.connect( 
        process.env.MONGO_URL)
 

    app.use(express.json());
    app.use("/api/post", postRoute);
    app.use("/api/getPosts", getPostsRoute);
    
    app.use("/api/comment", commentRoute); 
    app.use("/api/getComments", getCommentsRoute); 
    app.use("/api/test", getTestsRoute);
    
    // app.listen(8800, () => { 
    //     console.log ("Backend server is running at port 8000"); 
    // })
    return serverless(app)(event,context); 

};
