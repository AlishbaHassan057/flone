const express = require("express");

const {
  addCollection,
  getCollection,
} = require("../controller/collectionController");
const router = express.Router();

router.post("/add-collection", addCollection);
router.get("/get-collection", getCollection);

module.exports = router;
