import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    name: String,
    email: String,
    crop: String,
    quantity: Number,
    price: Number,
    place: String,
    orderedAt: {
      type: Date,
      default: Date.now  // This initializes the field with the current date and time
    }
  });

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);

export default Transaction;
