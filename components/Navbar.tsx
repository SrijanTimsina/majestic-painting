"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const NavItems = () => (
		<>
			<Button
				asChild
				variant="ghost"
				className="hover:bg-primary-foreground hover:text-primary"
			>
				<Link href="/">Home</Link>
			</Button>
			<Button
				asChild
				variant="ghost"
				className="hover:bg-primary-foreground hover:text-primary"
			>
				<Link href="/about">About</Link>
			</Button>
			<Button
				asChild
				variant="ghost"
				className="hover:bg-primary-foreground hover:text-primary"
			>
				<Link href="/gallery">Gallery</Link>
			</Button>
			<Button
				asChild
				variant="ghost"
				className="hover:bg-primary-foreground hover:text-primary"
			>
				<Link href="/contact">Contact</Link>
			</Button>
		</>
	);

	return (
		<nav className="bg-background border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-2">
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
					<div className="hidden md:flex">
						<NavItems />
					</div>
					<div className="md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[400px]"
							>
								<nav className="flex flex-col space-y-4 mt-4">
									<NavItems />
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
