const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      max: 30,
      unique: true
    },
    email: {
      type: String,
      required: true,
      min: 5,
      max: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 5
    },
    profilePicture: {
      type: String,
      default: ''
    },
    coverPicture: {
      type: String,
      defualt: ''
    },
    followers: {
      type: Array,
      default: []
    },
    following: {
      type: Array,
      default: []
    },
    bio: {
      type: String,
      max: 150
    },
    location: {
      type: String,
      max: 100
    }, 
    job: {
      type: String,
      max: 200
    }, 
    education: {
      type: String,
      max: 200
    }
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);