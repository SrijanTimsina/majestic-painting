"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      " Majestic Painting and Decorating exceeded my expectations in every way, and I would highly recommend them to anyone looking for top-notch painting services. Thank you for making my house look beautiful again!",
    author: "Sarah Johnson",
    role: "Homeowner",
  },
  {
    id: 2,
    content:
      "I recently hired Majestic Painting and Decorating to repaint my house, and I couldn't be happier with the results. From the initial consultation to the final touches, the team displayed exceptional professionalism and attention to detail.",
    author: "Michael Chen",
    role: "Business Owner",
  },
  {
    id: 3,
    content:
      "The team at Majestic Painting went above and beyond. They provided expert advice and delivered a finish that exceeded our expectations.",
    author: "Emma Thompson",
    role: "Interior Designer",
  },
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="relative">
          <Card className="mx-auto max-w-3xl">
            <CardContent className="px-8 pb-8 pt-10">
              <Quote className="mx-auto mb-4 h-12 w-12 text-primary" />
              <p className="mb-6 text-center text-lg">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="text-center">
                <p className="font-semibold">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 hover:bg-primary hover:text-primary-foreground max-[900px]:-left-4"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-primary hover:text-primary-foreground max-[900px]:-right-4"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex justify-center">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`mx-1 ${
                index === currentTestimonial
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
