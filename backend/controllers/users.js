const router = require('express').Router();
const User = require('./../models/User');
const bcrypt = require('bcrypt');

// Get a user
router.get('/', async (request, response, next) => {
  const userId = request.query.userId;
  const username = request.query.username;

  try {
    // Get user from database and send version that hides the password
    const user = userId 
      ? await User.findById(userId) 
      : await User.findOne({ username: username });
    const { password, ...other } = user._doc;
    response.status(200).json(other);
  } catch(error) {
    next(error);
  }
});

// Get all followed users for a user
router.get('/following/:userId', async (request, response, next) => {
  try {
    // Get all the users that the desired user follows 
    const user = await User.findById(request.params.userId);
    const usersFollowing = await Promise.all(
      user.following.map(followedUserId => User.findById(followedUserId))
    );
    response.status(200).json(usersFollowing);
  } catch(error) {
    next(error);
  }
});

// Get all users that follow a user
router.get('/followers/:userId', async (request, response, next) => {
  try {
    // Get all the users that the desired user follows 
    const user = await User.findById(request.params.userId);
    const usersFollowed = await Promise.all(
      user.followers.map(followedUserId => User.findById(followedUserId))
    );
    response.status(200).json(usersFollowed);
  } catch(error) {
    next(error);
  }
});

// Edit an account
router.put('/:id', async (request, response, next) => {
  try {
    // Check the user is updating their own account
    if (request.body.userId === request.params.id) {
      // If the user is updating their password, generate a hashed updated password
      if (request.body.password) {
          const salt = await bcrypt.genSalt(10);
          request.body.password = bcrypt.hash(request.body.password, salt);
      }
      // Make all other requested updates
      const user = await User.findByIdAndUpdate(request.params.id, { $set: request.body });
      response.status(200).json(user);
    } else {
      response.status(403).json('Not authorized to update this account');
    }
  } catch(error) {
    next(error);
  }
});

// Remove an account
router.delete('/:id', async (request, response, next) => {
  try {
    // Check the user is deleting their own account
    if (request.body.userId === request.params.id) {
      // Delete the account 
      const user = await User.findByIdAndDelete(request.params.id);
      response.status(200).json(user);
    } else {
      response.status(403).json('Not authorized to delete this account');
    }
  } catch(error) {
    next(error);
  }
});

// Follow a user
router.put('/:id/follow', async (request, response, next) => {
  try {
    // Check if user is trying to follow self
    if (request.body.userId !== request.params.id) {
      // Get user to follow and user doing following 
      const userToFollow = await User.findById(request.params.id);
      const userDoingFollowing = await User.findById(request.body.userId);
      // Check if the user is not already following the other user
      if (!userToFollow.followers.includes(request.body.userId)) {
        // Update the followers and following array of respective users
        await userToFollow.updateOne({ $push: { followers: request.body.userId }});
        await userDoingFollowing.updateOne({ $push: { following: request.params.id }});
        response.status(200).json('Successfully followed user');
      } else {
        response.status(403).json('This user is already followed');
      }
    } else {
      response.status(403).json('Can only follow other users');
    }
  } catch(error) {
    next(error);
  }
});

// Unfollow a user
router.put('/:id/unfollow', async (request, response, next) => {
  try {
    // Check if user is trying to unfollow self
    if (request.body.userId !== request.params.id) {
      // Get user to unfollow and user doing unfollowing 
      const userToUnfollow = await User.findById(request.params.id);
      const userDoingUnfollowing = await User.findById(request.body.userId);
      // Check if the user is already following the other user
      if (userToUnfollow.followers.includes(request.body.userId)) {
        // Update the followers and following array of respective users
        await userToUnfollow.updateOne({ $pull: { followers: request.body.userId }});
        await userDoingUnfollowing.updateOne({ $pull: { following: request.params.id }});
        response.status(200).json('Successfully unfollowed user');
      } else {
        response.status(403).json('This user is already not followed');
      }
    } else {
      response.status(403).json('Can only unfollow other users');
    }
  } catch(error) {
    next(error);
  }
});

module.exports = router;