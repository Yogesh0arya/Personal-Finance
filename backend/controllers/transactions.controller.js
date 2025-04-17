import Transactions from "../models/transactions.model.js";

export const getTransactions = async (req, res) => {
  const limit = parseInt(req.query.limit) || null;

  const transactions = await Transactions.find()
    .sort({ date: -1 })
    .limit(limit);

  res.status(200).send(transactions);
};

export const getTransaction = async (req, res) => {
  const id = req.params.id;

  const transaction = await Transactions.findById(id);

  res.status(200).send(transaction);
};

export const createTransaction = async (req, res) => {
  const newTransaction = new Transactions(req.body);

  const transaction = await newTransaction.save();

  res.status(200).send(transaction);
};

export const deleteTransaction = async (req, res) => {
  const transaction = await Transactions.findByIdAndDelete(req.params.id);

  res.status(200).send("Transaction has been deleted!");
};

export const updateTransaction = async (req, res) => {
  const updateTransaction = req.body;
  const id = req.params.id;

  const result = await Transactions.updateOne(
    { _id: Object(id) },
    { $set: updateTransaction }
  );

  res.status(200).send(updateTransaction);
};
