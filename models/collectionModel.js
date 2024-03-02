const mongoose = require("mongoose");
const collectionSchema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Collection", collectionSchema);
