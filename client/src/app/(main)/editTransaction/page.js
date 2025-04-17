"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { format } from "date-fns";

function EditTransaction() {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const searchParams = useSearchParams();
  const id = searchParams?.get("edit");

  // console.log(searchParams.get("edit"));

  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    async function fetchTransaction() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions/${id}`
      );
      const data = await res.json();
      setTransaction(data);

      const formattedDate = await format(new Date(data?.date), "yyyy-MM-dd");
      setTransaction({ ...data, date: formattedDate });
    }
    fetchTransaction();
  }, []);

  // console.log(transaction);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!transaction.amount) {
      newErrors.amount = "Amount is required";
    }
    if (!transaction.cat) {
      newErrors.cat = "Category is required";
    }
    if (!transaction.desc.trim()) {
      newErrors.desc = "Description is required";
    }

    if (!transaction.type) {
      newErrors.type = "Type is required";
    }

    if (!transaction.date) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Upload Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (!validateForm(formData)) {
      return;
    }

    const data = {
      desc: formData.get("desc"),
      cat: formData.get("cat"),
      amount: formData.get("amount"),
      type: formData.get("type"),
      date: formData.get("date"),
    };
    // console.log(data);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/transactions/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      }
    );
    const result = await response.json();

    if (response.ok) {
      toast.success("Transaction has been edited");
      router.push("/dashboard");
    } else {
      toast.error("Failed to edit transaction");
    }
  };

  return (
    <div className="w-[90vw] sm:w-[70vw] overflow-x-auto md:max-w-[900px] mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Edit Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          {!transaction ? (
            "Loading..."
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mb-4">
                <Label>Amount </Label>

                <Input
                  type="Number"
                  placeholder="$100"
                  name="amount"
                  value={transaction?.amount}
                  onChange={(e) =>
                    setTransaction((prev) => ({
                      ...prev,
                      amount: e.target.value,
                    }))
                  }
                />
                {errors.amount && (
                  <span className="text-red-500 text-sm">{errors.amount}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Label>Category </Label>

                <select
                  name="cat"
                  className="p-2 bg-white shadow-md rounded-lg"
                  value={transaction.cat}
                  onChange={(e) =>
                    setTransaction((prev) => ({
                      ...prev,
                      cat: e.target.value,
                    }))
                  }
                >
                  <option value="Grocery">Grocery</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Salary">Salary</option>
                  <option value="Rent">Rent</option>
                  <option value="Tax">Tax</option>
                  <option value="Fees">Fees</option>
                  <option value="Travel">Travel</option>
                  <option value="Other">Other</option>
                </select>
                {errors.cat && (
                  <span className="text-red-500 text-sm">{errors.cat}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Label>Description </Label>

                <Input
                  type="text"
                  placeholder="Samsung galaxy phone"
                  name="desc"
                  value={transaction?.desc}
                  onChange={(e) =>
                    setTransaction((prev) => ({
                      ...prev,
                      desc: e.target.value,
                    }))
                  }
                />
                {errors.desc && (
                  <span className="text-red-500 text-sm">{errors.desc}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Label>Type</Label>

                <select
                  name="type"
                  className="p-2 bg-white shadow-md rounded-lg"
                  value={transaction?.type}
                  onChange={(e) =>
                    setTransaction((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
                {errors.type && (
                  <span className="text-red-500 text-sm">{errors.type}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Label>Date </Label>

                <Input
                  type="date"
                  placeholder="01-04-2025"
                  name="date"
                  value={transaction.date}
                  onChange={(e) =>
                    setTransaction((prev) => ({
                      ...prev,
                      date: e.target.value,
                    }))
                  }
                />
                {errors.date && (
                  <span className="text-red-500 text-sm">{errors.date}</span>
                )}
              </div>

              <Button>Edit</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default EditTransaction;
