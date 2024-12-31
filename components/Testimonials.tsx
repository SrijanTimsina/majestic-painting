"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
	{
		id: 1,
		content:
			"Majestic Painting transformed our home beautifully. Their attention to detail and professionalism were outstanding!",
		author: "Sarah Johnson",
		role: "Homeowner",
	},
	{
		id: 2,
		content:
			"As a business owner, I appreciate their efficiency and quality. They completed our office renovation on time and with excellent results.",
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
			setCurrentTestimonial(
				(prev) => (prev + 1) % testimonials.length
			);
		}, 5000); // Change testimonial every 5 seconds

		return () => clearInterval(timer);
	}, []);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<section className="bg-muted py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">
					What Our Clients Say
				</h2>
				<div className="relative">
					<Card className="max-w-3xl mx-auto">
						<CardContent className="pt-10 pb-8 px-8">
							<Quote className="text-primary w-12 h-12 mb-4 mx-auto" />
							<p className="text-lg text-center mb-6">
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
						className="absolute top-1/2 -left-4 -translate-y-1/2"
						onClick={prevTestimonial}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="absolute top-1/2 -right-4 -translate-y-1/2"
						onClick={nextTestimonial}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
				<div className="flex justify-center mt-4">
					{testimonials.map((_, index) => (
						<Button
							key={index}
							variant="outline"
							size="sm"
							className={`mx-1  ${
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
