import express from "express";
import {
  createCompany,
  getAllCompany,
  getCompany,
} from "../Controller/companyController.js";
const router = express.Router();

router.post("/", createCompany);
router.get("/", getAllCompany);
router.get("/:id", getCompany);

export default router;
