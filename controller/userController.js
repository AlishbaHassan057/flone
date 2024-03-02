const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = AsyncHandler(async (req, res) => {
  const { f_name, l_name, p_mail, password, date, month, year, gender } =
    req.body;
  if (
    !f_name ||
    !l_name ||
    !p_mail ||
    !password ||
    !date ||
    !month ||
    !year ||
    !gender
  ) {
    throw new Error("Please enter all the relevant fields");
  }
  const checkUser = await User.findOne({ p_mail });
  if (checkUser) {
    throw new Error("This User already Exists!");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      f_name,
      l_name,
      p_mail,
      password: hashedpass,
      date,
      month,
      year,
      gender,
    });

    res.json({
      f_name,
      l_name,
      p_mail,
      password: hashedpass,
      date,
      month,
      year,
      gender,
    });
  }
});
// LOG IN
const loginUser = AsyncHandler(async (req, res) => {
  const { p_mail, password } = req.body;

  if (!p_mail || !password) {
    res.status(400);
    throw new Error("please enter the relevant fields");
  }

  const findUser = await User.findOne({
    p_mail,
  });

  if (!findUser) {
    res.status(404);
    throw new Error("User not found");
  } else if (findUser && (await bcrypt.compare(password, findUser.password))) {
    res.status(200);
    res.send(findUser);
  } else {
    res.status(401);
    throw new Error("InValid Credentials");
  }
});

module.exports = {
  registerUser,
  loginUser,
};
