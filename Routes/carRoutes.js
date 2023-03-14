import express from "express";
import { createCar, getAllCar, getCar } from "../Controller/carController.js";
const router = express.Router();

router.post("/", createCar);
router.get("/", getAllCar);
router.get("/:id", getCar);

export default router;
