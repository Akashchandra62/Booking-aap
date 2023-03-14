import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: [String],
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

const Company = mongoose.model("Company", CompanySchema);

export default Company;
