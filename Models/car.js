import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  releasedYear: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Car = mongoose.model("Car", CarSchema);

export default Car;
