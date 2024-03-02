const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dated: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
