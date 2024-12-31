import { Card, CardContent } from "@/components/ui/card"

const services = [
  { name: "Interior painting", icon: "🏠" },
  { name: "Exterior painting", icon: "🏡" },
  { name: "Paint touch-up", icon: "🖌️" },
  { name: "Spray painting", icon: "🎨" },
  { name: "Industrial painting", icon: "🏭" },
  { name: "Commercial painting", icon: "🏢" },
]

export function Services() {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">Professional service for your needs</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold">And many more services</p>
          <p className="mt-2 text-muted-foreground">We serve all over Sydney and surroundings</p>
        </div>
      </div>
    </section>
  )
}

