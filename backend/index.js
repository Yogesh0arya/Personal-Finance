import express from "express";
import transactionRouter from "./routes/transaction.route.js";
import budgetRouter from "./routes/budget.route.js";
import connectDB from "./lib/connectDB.js";
import cors from "cors";

const app = express();

app.use(cors(process.env.CLIENT_URL));

app.use(express.json());

app.use("/transactions", transactionRouter);
app.use("/budget", budgetRouter);

// error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(8000, () => {
  connectDB();
  console.log("Server is running!");
});
