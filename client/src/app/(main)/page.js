import HeroSection from "./_components/HeroSection";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import React from "react";
import { Button } from "../../components/ui/card";
import Link from "next/link";
import { ChartColumn, ChartPie, Wallet, Zap } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4 pt-4">
                <ChartColumn />
                <h3 className="text-xl font-semibold">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Get detailed insights into your spending patterns with
                  AI-powered analytics
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4 pt-4">
                <ChartPie />
                <h3 className="text-xl font-semibold">Budget Planning</h3>
                <p className="text-gray-600">
                  Create and manage budgets with intelligent recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4 pt-4">
                <Zap />
                <h3 className="text-xl font-semibold">Automated Insights</h3>
                <p className="text-gray-600">
                  Get automated financial insights and recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                1. Create Your Account
              </h3>
              <p className="text-gray-600">
                Get started in minutes with our simple and secure sign-up
                process
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartColumn />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                2. Track Your Spending
              </h3>
              <p className="text-gray-600">
                Automatically categorize and track your transactions in
                real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartPie />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Get Insights</h3>
              <p className="text-gray-600">
                Receive AI-powered insights and recommendations to optimize your
                finances
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
