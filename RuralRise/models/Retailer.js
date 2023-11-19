import mongoose from "mongoose";

const retailerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  });
  

const Retailer = mongoose.models.Retailer || mongoose.model("Retailer", retailerSchema);

export default Retailer;
