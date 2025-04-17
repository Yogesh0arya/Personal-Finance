"use client";

import React, { useEffect, useState } from "react";
import AllTransactions from "./_components/AllTransactions";

function DetailedRecords() {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch("http://localhost:8000/transactions");
      const data = await res.json();
      setTransactions(data);
    }
    fetchTransactions();
  }, []);

  return (
    <div className="grid">
      <p className="text-sm md:text-lg mb-4">
        Here's Detailed Records of all your balances.
      </p>

      <AllTransactions transactions={transactions} />
    </div>
  );
}

export default DetailedRecords;
