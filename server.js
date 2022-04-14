const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// var Posts = require("./post.json");
const Post = require('./models/Post');

// List of Middleware
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use(express.json());

app.get('/api/v1/post', async (req,res,next) => {
    const posts = await Post.find().sort({createdAt : -1});
    res.status(200).json({
        "data" : posts,
        "message" : "Success Giri Putra Adhittana" 
    })
});
app.get('/api/v1/post/:id', async (req,res,next) => {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
        "data" : post,
        "message" : "Success"
    })
});
app.post('/api/v1/post', async (req,res,next) => {
    const data = new Post({
        title : req.body.title,
        description : req.body.description,
    });

    await data.save()
        .then((result) => {
            let response = {
                data : result,
                message : 'Post Created Successfully'
            }
            res.status(201).json(response);
        })
        .catch((err) => {
            res.status(500).json({error : err.message});
        })
});

app.use('*',(req, res) => {
    res.status(404).json({error : 'Not Found'});
});

module.exports = app;
