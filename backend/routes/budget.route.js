import express from "express";
import { getBudget, updateBudget } from "../controllers/budget.controller.js";

const router = express.Router();

router.get("/", getBudget);

router.patch("/", updateBudget);

export default router;
