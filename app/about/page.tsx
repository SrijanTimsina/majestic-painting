import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
	const values = [
		{
			title: "Quality",
			description:
				"We use premium materials and techniques for lasting results.",
		},
		{
			title: "Integrity",
			description:
				"Honest communication and transparent pricing are our hallmarks.",
		},
		{
			title: "Professionalism",
			description:
				"Our team is punctual, respectful, and highly skilled.",
		},
		{
			title: "Innovation",
			description:
				"We stay updated with the latest trends and technologies in painting.",
		},
	];

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8 text-center">
				About Majestic Painting and Decorating Pty Ltd
			</h1>

			<div className="grid md:grid-cols-2 gap-12 items-center mb-12">
				<div>
					<Image
						src="/placeholder.svg"
						alt="Majestic Painting and Decorating Team"
						width={600}
						height={400}
						className="rounded-lg shadow-lg"
					/>
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-4">Our Story</h2>
					<p className="text-lg mb-4">
						Founded in 2005, Majestic Painting and Decorating Pty Ltd
						has been transforming spaces across Sydney for nearly two
						decades. Our journey began with a simple vision: to
						provide top-quality painting services that not only meet
						but exceed our clients' expectations.
					</p>
					<p className="text-lg mb-4">
						From humble beginnings as a small family-owned business,
						we've grown into a trusted name in the industry, known for
						our attention to detail, professional service, and
						commitment to excellence.
					</p>
				</div>
			</div>

			<Card className="mb-12">
				<CardHeader>
					<CardTitle className="text-2xl font-semibold">
						Our Commitment to Quality
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-lg mb-4">
						At Majestic Painting and Decorating, we believe that
						quality is not just about the paint we use, but the entire
						experience we provide. From the moment you contact us to
						the final brushstroke, we ensure:
					</p>
					<ul className="list-none space-y-2">
						<li className="flex items-center">
							<CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
							Meticulous preparation of surfaces
						</li>
						<li className="flex items-center">
							<CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
							Use of premium, eco-friendly paints and materials
						</li>
						<li className="flex items-center">
							<CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
							Skilled application techniques for a flawless finish
						</li>
						<li className="flex items-center">
							<CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
							Thorough clean-up and final inspection
						</li>
					</ul>
				</CardContent>
			</Card>

			<div className="mb-12">
				<h2 className="text-3xl font-bold mb-6 text-center">
					Our Values
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((value, index) => (
						<Card
							key={index}
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<CardHeader>
								<CardTitle className="text-xl font-semibold text-primary">
									{value.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{value.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold mb-4">
					Ready to Transform Your Space?
				</h2>
				<p className="text-xl mb-6">
					Whether you're looking to refresh your home or update your
					business premises, our team is ready to bring your vision to
					life.
				</p>
				<Button asChild size="lg">
					<Link href="/contact">Get Your Free Quote</Link>
				</Button>
			</div>
		</div>
	);
}
