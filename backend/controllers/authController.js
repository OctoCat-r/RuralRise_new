const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const compare = bcrypt.compare;
const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.signup = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, password: hashedPassword, email });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.signin = async (req, res) => {
  //   passport.authenticate("local", { session: false }, (err, user, info) => {
  //     if (err) {
  //       return res.status(500).json({ message: "Authentication failed." });
  //     }

  //     if (!user) {
  //       return res.status(401).json({ message: "Authentication failed." });
  //     }

  //     const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
  //       expiresIn: "1h", // Token expires in 1 hour, adjust as needed
  //     });

  //     res.status(200).json({ token });
  //   })(req, res);

  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });

  if (error)
    return res
      .status(401)
      .json({
        success: false,
        message: error.details[0].message.replace(/['"]+/g, ""),
      });

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res
        .status(401)
        .json({ success: false, message: "Account not Found" });

    const isMatch = await compare(password, checkUser.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Password" });

    const token = jwt.sign(
      { id: checkUser._id, email: checkUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    const finalData = { token, user: checkUser };
    return res
      .status(200)
      .json({ success: true, message: "Login Successfull", finalData });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Something Went Wrong Please Retry Later !",
      });
  }
};
