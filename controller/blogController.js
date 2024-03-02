const AsyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

const addBlog = AsyncHandler(async (req, res) => {
  const { title, image, description, dated } = req.body;
  try {
    const addedBlog = await Blog.create({
      title,
      image,
      description,
      dated,
    });
    res.send(addedBlog);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
const getBlogs = AsyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

module.exports = {
  addBlog,

  getBlogs,
};
