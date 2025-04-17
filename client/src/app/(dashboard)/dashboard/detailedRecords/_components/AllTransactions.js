"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../../components/ui/dropdown-menu";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { format } from "date-fns";
import { toast } from "react-toastify";

function AllTransactions({ transactions }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/transactions/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast.success("Transaction has been deleted");
      router.refresh(); // Force a page reload
    } else {
      toast.error("Failed to delete transaction");
    }
  };

  return (
    <div className="w-[90vw] sm:w-[70vw] overflow-x-auto md:max-w-[900px]">
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-gray-500">Date</TableHead>
                <TableHead className="text-gray-500">Description</TableHead>
                <TableHead className="text-gray-500">Category</TableHead>
                <TableHead className="text-right text-gray-500">
                  Amount
                </TableHead>
                <TableHead className="w-[50px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {!transactions ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : transactions.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    No Transaction Found
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((transaction) => (
                  <TableRow key={transaction._id}>
                    {/* <TableCell className="font-medium">
                      {transaction.date}
                    </TableCell> */}
                    <TableCell className="font-medium">
                      {format(new Date(transaction.date), "PP")}
                    </TableCell>
                    <TableCell className="text-wrap">
                      {transaction.desc}
                    </TableCell>
                    <TableCell>{transaction.cat}</TableCell>
                    <TableCell
                      className={`text-right ${
                        transaction.type === "Expense"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {transaction.type === "Expense" ? "-" : "+"}$
                      {transaction.amount}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() =>
                              router.push(
                                `/editTransaction?edit=${transaction._id}`
                              )
                            }
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => handleDelete(transaction._id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default AllTransactions;
