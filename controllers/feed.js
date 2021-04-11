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
  const title = req.body.title;
  const content = req.body.title;

  res.status(201).json({
    message: 'Post created succefully',
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {
        name: 'Yiro Yi'
      },
      createdAt: new Date()
    }
  });
}
