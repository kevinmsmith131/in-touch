const router = require('express').Router();
const Post = require('./../models/Post');
const User = require('./../models/User');

// Create a post 
router.post('/', async (request, response, next) => {
  try {
    // Create and save the new post model
    const post = new Post(request.body);
    const savedPost = await post.save();
    response.status(200).json(savedPost);
  } catch(error) {
    next(error);
  }
});

// Edit a post 
router.put('/:id', async (request, response, next) => {
  try {
    // Check if the post exists and that is belongs to the editor 
    const post = await Post.findById(request.params.id);
    if (post.userId === request.body.userId) {
      // Update the post with the new contents in the database
      await post.updateOne({ $set: request.body });
      resonse.status(200).json('Successfully edited post');
    } else {
      response.status(403).json('Not authorized to edit this post');
    }
  } catch(error) {
    next(error);
  }
});

// Remove a post
router.delete('/:id', async (request, response, next) => {
  try {
    // Check if the post exists and that is belongs to the deleter
    const post = await Post.findById(request.params.id);
    if (post.userId === request.body.userId) {
      // Delete the post from the database
      await post.deleteOne();
      resonse.status(200).json('Successfully deleted post');
    } else {
      response.status(403).json('Not authorized to delete this post');
    }
  } catch(error) {
    next(error);
  }
});

// Like a post
router.put('/:id/like', async (request, response, next) => {
  try {
    // Check for the post and that if the user has already liked the post
    const post = await Post.findById(request.params.id);
    if (!post.likes.includes(request.body.userId)) {
      // Add the user to the list of users that likes the post
      await post.updateOne({ $push: { likes: request.body.userId }});
      response.send(200).json('Successfully liked post');
    } else {
      // Remove the user from the list of users that likes the post
      await post.updateOne({ $pull: { likes: request.body.userId }});
      response.send(200).json('Successfully removed like from post');
    }  
  } catch(error) {
    next(error);
  }
});

// Get a post
router.get('/:id', async (request, response, next) => {
  try {
    // Send the post if it exists in the database
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch(error) {
    next(error);
  }
});

// Get all posts of the followed users
router.get('/feed/:userId', async (request, response, next) => {
  try {
    // Check for the user and all the posts they have made
    const user = await User.findById(request.params.userId);
    const userPosts = await Post.find({ userId: user._id });

    // Check for all the posts made by followed users
    const followeePosts = await Promise.all(
      user.following.map(followeeId => Post.find({ userId: followeeId }))
    );

    // Send the users and followed users posts concatenated together as the entire feed
    response.status(200).json(userPosts.concat(...followeePosts)); 
  }  catch(error) {
    next(error);
  }
});

// Get all posts from a user
router.get('/profile/:username', async (request, response, next) => {
  try {
    // Find the user using the given username
    const user = await User.findOne({ username: request.params.username });

    // Check for the posts of the user 
    const posts = await Post.find({ userId: user._id});
    response.status(200).json(posts);
  }  catch(error) {
    next(error);
  }
}); 

module.exports = router;