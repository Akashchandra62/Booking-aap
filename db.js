import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((result) => {
      console.log("Connected to DataBase successfully");
    })
    .catch((err) => {
      console.log(`Error in connecting to database ${err}`);
    });
};

export default connectDB;
