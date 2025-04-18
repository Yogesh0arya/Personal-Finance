import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { ChartColumn, ChartPie, Wallet, Zap } from "lucide-react";

function About() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <Card className="max-w-2xl mx-auto shadow-md rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-center">
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Personal Finance is a new-age personal finance website for those
                to whom living a good life matters and want to double down on
                their life goals. We aim to equip you with the knowledge and
                tools to achieve financial independence and well-being. Unlike
                traditional financial planning and advisory services, our
                offerings are rooted in psychology and human experience.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                As an arm of Yogesh Arya, Personal Finance benefits from decades
                of experience in the personal finance advisory landscape. This
                experience gives us the edge of having observed financial habits
                and wealth creation of individuals and families across the
                country. Today, our advice and expertise is shaped heavily by
                these insights
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Our Location</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We are proudly located in Chennai, Tamil Nadu, India.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-4">
                <div className="flex items-center mb-4">
                  <Image
                    src="/person1.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Freelancer</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Welth has transformed how I manage my business finances. The
                  AI insights have helped me identify cost-saving opportunities
                  I never knew existed.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-4">
                <div className="flex items-center mb-4">
                  <Image
                    src="/person2.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-gray-600">Business Owner</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  The receipt scanning feature saves me hours each month. Now I
                  can focus on my work instead of manual data entry and expense
                  tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-4">
                <div className="flex items-center mb-4">
                  <Image
                    src="/person3.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">Emily Rodriguez</div>
                    <div className="text-sm text-gray-600">
                      Financial Advisor
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  I recommend Welth to all my clients. The multi-currency
                  support and detailed analytics make it perfect for
                  international investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
