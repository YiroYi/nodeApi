const { validationResult } = require('express-validator/check');
const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: 1,
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/cat.png',
        creator: {
          name: 'Yiro Yi'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    const error = new Error('Validation failed');
    error.statusCode = 422
    throw error;
  }

  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/cat.png'
    creator: {
      name: 'Yiro Yi'
    }
  });

  post
    .save()
    .then(result => {
      const title = req.body.title;
      const content = req.body.title;

      res.status(201).json({
        message: 'Post created succefully',
        post: result
      });
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
}
