import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
  { name: "Interior painting", icon: "🏠" },
  { name: "Exterior painting", icon: "🏡" },
  { name: "Paint touch-up", icon: "🖌️" },
  {
    name: "Spray painting",
    icon: (
      <Image
        className="h-9 w-9"
        width={36}
        height={36}
        src={"/spray.svg"}
        alt="spray painting"
      />
    ),
  },
  { name: "Industrial painting", icon: "🏭" },
  { name: "Commercial painting", icon: "🏢" },
];

export function Services() {
  return (
    <section className="border-b bg-gradient-to-b from-background to-muted py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-2xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
          Our Services
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Professional service for your needs
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold">And many more services</p>
          <p className="mt-2 text-muted-foreground">
            We serve all over Sydney and surroundings
          </p>
        </div>
      </div>
    </section>
  );
}
