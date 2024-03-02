const express = require("express");
const errorHandler = require("./middleware/errorMiddleware.js");
const connect = require("./config/connectDB.js");
const app = express();
require("dotenv").config();
require("colors");
const cors = require("cors");

app.use(cors());

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/collection", require("./routes/collectionRoute"));
app.use("/api/blogs", require("./routes/blogRoute"));
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on Port: ${process.env.PORT.blue}`)
);
