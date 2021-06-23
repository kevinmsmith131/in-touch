const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      max: 600
    },
    content: {
      type: String
    },
    likes: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);