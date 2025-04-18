import { Label } from "../../../components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";

function Contact() {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                className="w-full"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-6 text-center text-gray-600">
        <p>Shade CN - Chennai, Tamil Nadu, India</p>
      </div>
    </div>
  );
}

export default Contact;
