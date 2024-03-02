const express = require("express");

const { addBlog, getBlogs } = require("../controller/blogController");
const router = express.Router();

router.post("/add-blog", addBlog);
router.get("/get-blog", getBlogs);

module.exports = router;
