const router = require('express').Router();
const User = require('./../models/User');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Get a user
router.get('/', async (request, response, next) => {
  const userId = request.query.userId;
  const username = request.query.username;

  try {
    // Get user from database and send version that hides the password
    const user = userId 
      ? await User.findById(userId) 
      : await User.findOne({ username: username });
    response.status(200).json(user);
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

// Remove an account
router.delete('/:id', async (request, response, next) => {
  try {
    // Check the user is deleting their own account
    if (request.body._id === request.params.id) {
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

// Update a user
router.put("/:id", async (request, response) => {
  if (request.body._id === request.query.id) {
    try {
      const user = await User.findByIdAndUpdate(request.params.id, {
        $set: request.body,
      });
      response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  } else {
    response.status(403).json("User not authorized to update account");
  }
});

// Edit an account email
router.put("/email/:id", async (request, response) => {
  if (request.body.data.data._id === request.params.id) {
      try {
        mongoose.set('useFindAndModify', false);
        const user = await User.findByIdAndUpdate(
          request.params.id, 
          { ...request.body.data.data, email: request.body.data.email } 
        );
        response.status(200).json(user);
      } catch (error) {
        logger.error(error);
      }
  } else {
    response.status(403).json("User not authorized to update account");
  }
});

// Edit an account username
router.put("/username/:id", async (request, response) => {
  if (request.body.data.data._id === request.params.id) {
      try {
        mongoose.set('useFindAndModify', false);
        await User.findByIdAndUpdate(
          request.params.id, 
          { ...request.body.data.data, username: request.body.data.username } 
        );
        response.status(200).json({ name: request.body.data.username });
      } catch (error) {
        response.status(200).json(null);
      }
  } else {
    response.status(403).json("User not authorized to update account");
  }
});

// Edit an account password
router.put('/password/:id', async (request, response, next) => {
  try {
    // Check the user is updating their own account
    if (request.body.data.data._id === request.params.id) {
      // If the user is updating their password, generate a hashed updated password
      if (request.body.data.password) {
          const salt = await bcrypt.genSalt(10);
          await bcrypt.hash(request.body.data.password, salt)
            .then(hash => { request.body.data.password = hash })
            .catch(error => next(error));
      }

      // Create the updated entry
      const newEntry = {
        username: request.body.data.data.username,
        email: request.body.data.data.email,
        password: request.body.data.password,
        profilePicture: request.body.data.data.profilePicture,
        coverPicture: request.body.data.data.coverPicture ? request.body.data.data.coverPicture: '',
        followers: request.body.data.data.followers,
        following: request.body.data.data.following,
        bio: request.body.data.data.bio ? request.body.data.data.bio : '',
        location: request.body.data.data.location ? request.body.data.data.location : '',
        job: request.body.data.data.job ? request.body.data.data.job : '',
        education: request.body.data.data.education ? request.body.data.data.education : ''
      }; 

      // Make all other requested updates
      mongoose.set('useFindAndModify', false);
      const user = await User.findOneAndUpdate({ _id: request.body.data.data._id } , newEntry, { new: true });
      response.status(200).json(user);
    } else {
      response.status(403).json('Not authorized to update this account');
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