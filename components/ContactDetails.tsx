import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Address",
    content: "34 Bowden Street, Guildford, NSW 2161, Australia",
    link: "https://goo.gl/maps/YourGoogleMapsLink",
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Phone",
    content: "+61 415 894 507",
    link: "tel:+61415894507",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Email",
    content: "info.majesticpainters@gmail.com",
    link: "mailto:info.majesticpainters@gmail.com",
  },
];

export function ContactDetails() {
  return (
    <section className="border-b bg-muted py-12 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactDetails.map((detail, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <Link href={detail.link}>
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                    {detail.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{detail.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {detail.content}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
