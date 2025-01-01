import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { CallButton } from "@/components/CallButton";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Majestic Painting and Decorating",
  description:
    "Majestic Painting and Decorating Pty Ltd in Guildford transforms spaces with high-quality painting services. From residential to commercial projects, their skilled team delivers flawless results using premium materials, combining precision, style, and craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <CallButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
