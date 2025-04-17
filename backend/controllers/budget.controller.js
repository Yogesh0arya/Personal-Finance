import BudgetModel from "../models/budget.model.js";
import Transactions from "../models/transactions.model.js";

export const getBudget = async (req, res) => {
  const budget = await BudgetModel.findOne();

  // Get current month's expenses
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const expensesResult = await Transactions.aggregate([
    {
      $match: {
        type: "Expense",
        date: {
          $gte: startOfMonth,
          $lte: endOfMonth,
        },
      },
    },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: "$amount" },
      },
    },
  ]);

  const currentExpenses =
    expensesResult.length > 0 ? expensesResult[0].totalAmount : 0;

  return res.json({
    budget: budget ? { ...budget.toObject(), amount: budget.amount } : null,
    currentExpenses: currentExpenses,
  });
};

export const updateBudget = async (req, res) => {
  const { amount } = req.body; // Assuming the new budget amount is in the request body
  const budget = await BudgetModel.findOneAndUpdate(
    {}, // Empty filter to find the single budget document
    { amount: parseFloat(amount) }, // Update the amount
    { upsert: true, new: true } // Create if it doesn't exist, return the updated document
  );

  return res.json({
    success: true,
    data: budget ? { ...budget.toObject(), amount: budget.amount } : null,
  });
};
