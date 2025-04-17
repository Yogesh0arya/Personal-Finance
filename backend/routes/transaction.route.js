import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
  getTransactions,
  updateTransaction,
} from "../controllers/transactions.controller.js";

const router = express.Router();

router.get("/", getTransactions);

router.get("/:id", getTransaction);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.patch("/:id", updateTransaction);

export default router;
