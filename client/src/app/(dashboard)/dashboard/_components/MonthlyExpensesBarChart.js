"use client";

import React, { useEffect, useMemo, useState } from "react";
import { startOfDay, endOfDay, subDays, format } from "date-fns";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const DATE_RANGES = {
  "7D": { label: "Last 7 Days", days: 7 },
  "1M": { label: "Last Month", days: 30 },
  "3M": { label: "Last 3 Months", days: 90 },
  "6M": { label: "Last 6 Months", days: 100 },
  ALL: { label: "All Time", days: null },
};

function MonthlyExpensesBarChart() {
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

  const [dateRange, setDateRange] = useState("1M");

  const filteredData = useMemo(() => {
    if (!transactions) {
      return;
    }
    const range = DATE_RANGES[dateRange];
    const now = new Date();
    const startDate = range.days
      ? startOfDay(subDays(now, range.days))
      : startOfDay(new Date(0));

    // Filter transactions within date range
    const filtered = transactions?.filter(
      (t) => new Date(t.date) >= startDate && new Date(t.date) <= endOfDay(now)
    );

    // console.log(filtered);
    // Group transactions by date
    const grouped = filtered?.reduce((acc, transaction) => {
      const date = format(new Date(transaction.date), "MMM dd");
      if (!acc[date]) {
        acc[date] = { date, income: 0, expense: 0 };
      }
      if (transaction.type === "Income") {
        acc[date].income += transaction.amount;
      } else {
        acc[date].expense += transaction.amount;
      }
      return acc;
    }, {});

    // Convert to array and sort by date
    return Object?.values(grouped).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, [transactions, dateRange]);

  // Calculate totals for the selected period
  const totals = useMemo(() => {
    return filteredData?.reduce(
      (acc, day) => ({
        income: acc.income + day.income,
        expense: acc.expense + day.expense,
      }),
      { income: 0, expense: 0 }
    );
  }, [filteredData]);

  return (
    <Card className="w-[90vw] sm:w-[70vw] overflow-x-auto md:max-w-[900px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle>Monthly Expenses</CardTitle>
        <Select defaultValue={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(DATE_RANGES).map(([key, { label }]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {!transactions ? (
          "Loading..."
        ) : (
          <>
            <section>
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <p className="text-gray-500">Total Income</p>
                  <p className="text-green-500 font-medium">
                    ${totals.income.toFixed(2)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Total Expense</p>
                  <p className="text-red-500 font-medium">
                    ${totals.expense.toFixed(2)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Net</p>
                  <p
                    className={`text-lg font-bold ${
                      totals.income - totals.expense >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    ${(totals.income - totals.expense).toFixed(2)}
                  </p>
                </div>
              </div>
            </section>

            <section className="sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    horizontal={false}
                  />
                  <XAxis dataKey="date" />
                  <YAxis
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip formatter={(value) => [`$${value}`, undefined]} />
                  <Legend />
                  <Bar
                    dataKey="income"
                    name="income"
                    fill="#22c55e"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="expense"
                    name="expense"
                    fill="#ef4444"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </section>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default MonthlyExpensesBarChart;
