const { User } = require("../database/models/user.model");
const jwt = require("jsonwebtoken");

const SECRET = "1234567890";

const login = async (req, res, next) => {
  // assumption that there was a validation before here
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
      internalCode: "LUNF1",
    });
    return;
  }
  const token = jwt.sign(user.toJSON(), SECRET);

  res.json({
    success: true,
    message: "Authorized",
    data: { token },
  });
};

const signup = async (req, res, next) => {
  // assumption that there was a validation before here
  const { email, password, first_name, last_name } = req.body;
  console.log({ email, password, first_name, last_name });
  // does the email already exist
  const user = await User.findOne({ where: { email } });
  if (user) {
    res.status(400).json({
      success: false,
      message: "User with the email already exist",
      internalCode: "SUNF1",
    });
    return;
  }

  const newUser = await User.create({
    email,
    // bcrypt(password, salt, 'algo'),
    password,
    first_name,
    last_name,
  });

  if (!newUser) {
    res.status(400).json({
      success: false,
      message: "Could not create user with email: " + email,
      internalCode: "SUNF2",
    });
    return;
  }
  res.json({ success: true, message: "success", data: newUser });
};

module.exports = { login, signup };
