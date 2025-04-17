"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function addTransaction() {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get("amount")?.trim()) {
      newErrors.amount = "Amount is required";
    }
    if (!formData.get("cat")?.trim()) {
      newErrors.cat = "Category is required";
    }
    if (!formData.get("desc")?.trim()) {
      newErrors.desc = "Description is required";
    }

    if (!formData.get("type")?.trim()) {
      newErrors.type = "Type is required";
    }

    if (!formData.get("date")) {
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
      `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (response.ok) {
      toast.success("Transaction has been created");
      router.push("/dashboard");
    } else {
      toast.error("Failed to create transaction");
    }
  };

  return (
    <div className="w-[90vw] sm:w-[70vw] overflow-x-auto md:max-w-[900px] mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add New Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-4">
              <Label>Amount </Label>

              <Input type="Number" placeholder="$100" name="amount" />
              {errors.amount && (
                <span className="text-red-500 text-sm">{errors.amount}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Category </Label>

              <select name="cat" className="p-2 bg-white shadow-md rounded-lg">
                <option value="Grocery">Grocery</option>
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
              />
              {errors.desc && (
                <span className="text-red-500 text-sm">{errors.desc}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Type</Label>

              <select name="type" className="p-2 bg-white shadow-md rounded-lg">
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
              {errors.type && (
                <span className="text-red-500 text-sm">{errors.type}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Date </Label>

              <Input type="date" placeholder="01-04-2025" name="date" />
              {errors.date && (
                <span className="text-red-500 text-sm">{errors.date}</span>
              )}
            </div>

            <Button>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default addTransaction;
