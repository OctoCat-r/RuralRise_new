import ConnectDB from "@/components/DB/connectDB";
import User from "@/models/User";
import Joi from "joi";
import { hash } from "bcryptjs";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().required(),
  contact: Joi.number().required(),
  DOB: Joi.date().iso().required(),
  address: Joi.string(),
  category: Joi.string().required(),
});

export default async (req, res) => {
  await ConnectDB();

  const { email, password, name, address, DOB, category, contact } = req.body;
  const { error } = schema.validate({
    email,
    password,
    name,
    address,
    DOB,
    category,
    contact,
  });
   console.log(req.body);
  

  if (error)
    return res.status(401).json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const ifExist = await User.findOne({ email });

    if (ifExist) {
      return res
        .status(406)
        .json({ success: false, message: "User Already Exist" });
    } else {
      const hashedPassword = await hash(password, 12);
      
      const createUser = await User.create({
        email,
        name,
        contact,
        address,
        DOB,
        category,
        password: hashedPassword,
      });
      return res
        .status(201)
        .json({ success: true, message: "Account created successfully" });
    }
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
