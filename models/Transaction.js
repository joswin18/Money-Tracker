import mongoose from "mongoose"

const TransactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the transaction"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    datetime: {
      type: Date,
      required: [true, "Please provide a date and time"],
    },
    price: {
      type: Number,
      required: [true, "Please provide an amount"],
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema)

