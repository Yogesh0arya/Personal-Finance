"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#D4A5A5",
  "#9FA8DA",
];

function MonthlyExpenses() {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions`
      );
      const data = await res.json();
      setTransactions(data);
    }
    fetchTransactions();
  }, []);

  // Calculate expense breakdown for current month
  const currentDate = new Date();
  const currentMonthExpenses = transactions?.filter((t) => {
    const transactionDate = new Date(t.date);
    return (
      t.type === "Expense" &&
      transactionDate.getMonth() === currentDate.getMonth() &&
      transactionDate.getFullYear() === currentDate.getFullYear()
    );
  });

  // Group expenses by category
  const expensesByCategory = currentMonthExpenses?.reduce(
    (acc, transaction) => {
      const category = transaction.cat;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += transaction.amount;
      return acc;
    },
    {}
  );

  if (!transactions) return "Loading...";

  // Format data for pie chart
  const pieChartData = Object?.entries(expensesByCategory).map(
    ([category, amount]) => ({
      name: category,
      value: amount,
    })
  );

  return (
    <div>
      <p className="text-sm md:text-lg mb-4">
        Here is an Monthly Expenses of all your balances.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Category wise Monthly Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          {!transactions ? (
            "Loading..."
          ) : (
            <section className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value.toFixed(2)}`}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => `$${value.toFixed(2)}`}
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </section>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default MonthlyExpenses;
