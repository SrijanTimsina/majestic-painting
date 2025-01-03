"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      return;
    }
    setIsSubmitting(true);

    emailjs
      .sendForm("service_1295ne8", "template_hnvh3wj", form.current, {
        publicKey: "pzd5H6YPeo7pn9DcZ",
      })
      .then(
        () => {
          toast({
            variant: "success",
            description:
              "Your Message has been sent successfully! We'll get back to you soon.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description:
              "There was a problem while submitting your message. Please try again later.",
          });
        },
      )
      .finally(() => setIsSubmitting(false));
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <form ref={form} onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <Input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        <div className="rounded-lg bg-muted p-8">
          <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>
          <div className="space-y-4">
            <a
              href="https://goo.gl/maps/YourGoogleMapsLink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start transition-colors hover:text-primary"
            >
              <MapPin className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
              <p>34 Bowden Street, Guildford, NSW 2161, Australia</p>
            </a>
            <a
              href="tel:+61415894507"
              className="flex items-center transition-colors hover:text-primary"
            >
              <Phone className="mr-3 h-6 w-6 text-primary" />
              <p>+61 415 894 507</p>
            </a>
            <a
              href="mailto:info.majesticpainters@gmail.com"
              className="flex items-center transition-colors hover:text-primary"
            >
              <Mail className="mr-3 h-6 w-6 text-primary" />
              <p>info.majesticpainters@gmail.com</p>
            </a>
          </div>
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7:00 AM - 5:00 PM</li>
              <li>Saturday & Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
