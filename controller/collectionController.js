const AsyncHandler = require("express-async-handler");
const Collection = require("../models/collectionModel");

const addCollection = AsyncHandler(async (req, res) => {
  const { product, image, description, price, category } = req.body;
  try {
    const addedCollection = await Collection.create({
      product,
      image,
      description,
      price,
      category,
    });
    res.send(addedCollection);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
const getCollection = AsyncHandler(async (req, res) => {
  try {
    const Collect = await Collection.find();
    res.send(Collect);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

module.exports = {
  addCollection,

  getCollection,
};
