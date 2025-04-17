"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../../components/ui/card";
import { Check, Pencil, X } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function BudgetPlanning() {
  const [budget, setBudget] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchbudget() {
      const res = await fetch("http://localhost:8000/budget");
      const data = await res.json();
      setBudget(data);
    }
    fetchbudget();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    budget?.initialBudget?.amount?.toString() || ""
  );

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    const response = await fetch(`http://localhost:8000/budget/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });
    const result = await response.json();

    if (response.ok) {
      toast.success("Budget has been Updated");

      setIsEditing(false);
      router.refresh();
    } else {
      toast.error("Failed to update Budget");
    }
  };

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEditing(false);
  };

  const initialBudget = budget?.budget;
  const currentExpenses = budget?.currentExpenses || 0;

  const percentUsed = initialBudget?.amount
    ? (currentExpenses / initialBudget?.amount) * 100
    : 0;

  // console.log(initialBudget?.amount);

  return (
    <div>
      <p className="text-sm md:text-lg mb-5">Here's your Budget Planning.</p>

      <Card>
        <CardHeader className="flex items-center justify-between space-y-0 pb-7">
          <div className="flex-1">
            <CardTitle>Monthly Budget</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-32"
                    placeholder="Enter amount"
                    autoFocus
                    // disabled={isLoading}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleUpdateBudget}
                    // disabled={isLoading}
                  >
                    <Check className="h-4 w-4 text-green-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCancel}
                    // disabled={isLoading}
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ) : (
                <>
                  <CardDescription>
                    {initialBudget
                      ? `$${currentExpenses.toFixed(
                          2
                        )} of $${initialBudget.amount.toFixed(2)} spent`
                      : "No budget set"}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsEditing(true)}
                    className="h-6 w-6"
                  >
                    <Pencil className="h-3 w-3" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {initialBudget && (
            <div className="space-y-2">
              <Progress
                value={percentUsed}
                extraStyles={`${
                  // add to Progress component
                  percentUsed >= 90
                    ? "bg-red-500"
                    : percentUsed >= 75
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              />
              <p className="text-xs text-muted-foreground text-right">
                {percentUsed.toFixed(1)}% used
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default BudgetPlanning;
