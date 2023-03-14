import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import CompanyRoutes from "./Routes/companyRoutes.js";
import CarRoutes from "./Routes/carRoutes.js";
import BookingRoutes from "./Routes/bookingRoutes.js";
const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/company", CompanyRoutes);
app.use("/car", CarRoutes);
app.use("/booking", BookingRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
