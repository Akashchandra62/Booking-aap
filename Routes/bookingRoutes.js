import express from "express";
import {
  createBooking,
  deleteBooking,
  getAllBooking,
  getBooking,
} from "../Controller/bookingController.js";
const router = express.Router();

router.post("/", createBooking);
router.get("/", getAllBooking);
router.get("/:id", getBooking);
router.delete("/:id", deleteBooking);

export default router;
