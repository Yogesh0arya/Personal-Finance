"use client";

import React, { useEffect, useState } from "react";
import TransactionTable from "./_components/TransactionTable";
import MonthlyExpensesBarChart from "./_components/MonthlyExpensesBarChart";

function Dashboard() {
  // console.log(process.env.NEXT_PUBLIC_API_URL);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions?limit=4`
      );
      const data = await res.json();
      setTransactions(data);
    }
    fetchTransactions();
  }, []);

  return (
    <div>
      <div>
        <p className="text-sm md:text-lg mb-5">
          Here is an overview of all your balances.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <MonthlyExpensesBarChart />

        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
}

export default Dashboard;
