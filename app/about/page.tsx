import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
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
					<p className="text-lg mb-4">
						At Majestic Painting and Decorating Pty Ltd, we believe
						that every space has the potential to inspire, transform,
						and uplift. With decades of expertise and a commitment to
						excellence, we bring your vision to life through
						high-quality painting and decorating services that exude
						elegance and sophistication.
					</p>
					<p className="text-lg mb-4">
						Located in Guildford, we are proud to offer a diverse
						range of professional solutions, from residential
						makeovers to large-scale commercial projects. Whether you
						seek a bold statement or a timeless, subtle look, our team
						is dedicated to delivering flawless results that stand the
						test of time.
					</p>
				</div>
			</div>

			<div className="bg-muted p-8 rounded-lg shadow-inner mb-12">
				<h2 className="text-2xl font-semibold mb-4">
					Our Commitment to Quality
				</h2>
				<p className="text-lg mb-4">
					We use only the finest materials and innovative techniques
					to ensure each project is a testament to quality
					craftsmanship. Our work is more than just a coat of paint,
					it's a commitment to enhancing the beauty of your
					environment, ensuring that each brushstroke brings out the
					essence of your space.
				</p>
				<p className="text-lg">
					Majestic Painting and Decorating combines art with
					precision, creating dynamic, harmonious spaces that reflect
					your style and personality.
				</p>
			</div>

			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold mb-4">
					Your Vision, Our Expertise
				</h2>
				<p className="text-xl mb-6">
					Your property deserves more than just paint; it deserves a
					lasting impression. With Majestic Painting and Decorating,
					trust that every detail will be executed with the utmost
					care and passion, creating a stunning masterpiece tailored
					to your unique needs.
				</p>
				<Button asChild size="lg">
					<Link href="/contact">Get in Touch</Link>
				</Button>
			</div>
		</div>
	);
}
