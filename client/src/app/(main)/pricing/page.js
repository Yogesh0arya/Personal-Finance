"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"; // Assuming your UI components are here
import { Button } from "../../../components/ui/button";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Access to basic budgeting tools",
        "Track up to 10 transactions per month",
        "Limited savings goal tracking",
        "Community forum access",
      ],
      cta: "Get Started for Free",
      isPopular: false,
    },
    {
      name: "Premium",
      price: "₹99/month", // Indian Rupees
      features: [
        "Unlimited access to all budgeting tools",
        "Unlimited transaction tracking",
        "Advanced savings goal tracking with automation",
        "Investment tracking features",
        "Priority email support",
        "Exclusive webinars",
      ],
      cta: "Upgrade to Premium",
      isPopular: true,
    },
    {
      name: "Family",
      price: "₹149/month", // Indian Rupees
      features: [
        "Everything in Premium",
        "Multi-user access (up to 5 family members)",
        "Shared budgeting and goal tracking",
        "Dedicated family finance dashboard",
      ],
      cta: "Get Family Plan",
      isPopular: false,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Pricing Plans
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Choose the plan that best suits your financial needs.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full mx-auto">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`shadow-md rounded-lg ${
              tier.isPopular ? "border-2 border-blue-500" : ""
            }`}
          >
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
                {tier.name}
                {tier.isPopular && (
                  <span className="ml-2 text-sm text-blue-500">(Popular)</span>
                )}
              </CardTitle>
              <p className="text-center text-2xl font-bold mt-2 text-indigo-600">
                {tier.price}
              </p>
              {tier.price !== "Free" && (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Billed monthly
                </p>
              )}
            </CardHeader>
            <CardContent className="p-12">
              <ul className="list-disc space-y-2 text-gray-700 dark:text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button
                className="w-full mt-4"
                onClick={() => alert(`Clicked on ${tier.name} plan!`)}
              >
                {tier.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center mt-12 text-gray-500 dark:text-gray-400">
        <p>Prices are listed in Indian Rupees (₹) where applicable.</p>
        <p className="mt-2">
          Have questions?{" "}
          <a href="/contact" className="text-indigo-500 hover:underline">
            Contact Us
          </a>
        </p>
      </section>
    </div>
  );
};

export default Pricing;
