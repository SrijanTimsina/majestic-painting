import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { AnimatedStats } from "@/components/AnimatedStats";
import { ContactDetails } from "@/components/ContactDetails";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <section className="bg-background py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-medium tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to Majestic Painting and Decorating
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transform your space with our expert painting and decorating
                    services. Quality craftsmanship for every project.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/gallery">View Our Work</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  alt="Majestic Painting and Decorating"
                  className="object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <Services />
        <AnimatedStats />
        <ContactDetails />
        <Testimonials />
      </main>
    </div>
  );
}
