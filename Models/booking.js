import mongoose from "mongoose";
import validator from "validator";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is Required"],
  },
  email: {
    type: String,
    required: [true, "Email field is Required"],
    validate: {
      validator: validator.isEmail,
    },
  },
  phone: {
    type: String,
    minLength: [10, "Incorrect Phone"],
    maxLength: [10, "Incorrect Phone"],
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  bookedOn: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
