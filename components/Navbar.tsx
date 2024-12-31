import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
	return (
		<nav className="bg-background border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0">
							<Image
								alt="Majestic Painting and Decorating"
								src="/logo.png"
								height={100}
								width={80}
							/>
						</Link>
					</div>
					<div className="flex">
						<Button asChild variant="ghost" className="mr-2">
							<Link href="/">Home</Link>
						</Button>
						<Button asChild variant="ghost" className="mr-2">
							<Link href="/about">About</Link>
						</Button>
						<Button asChild variant="ghost" className="mr-2">
							<Link href="/gallery">Gallery</Link>
						</Button>
						<Button asChild variant="ghost">
							<Link href="/contact">Contact</Link>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
