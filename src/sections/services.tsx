import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Clipboard, Heart, CreditCard } from "lucide-react";

interface ServiceItem {
  icon: any;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    icon: ShoppingBag,
    title: "Pharmacy",
    desc: "Wide range of medicines and healthcare products",
  },
  {
    icon: Clipboard,
    title: "Prescriptions",
    desc: "Quick and accurate prescription fulfillment",
  },
  {
    icon: Heart,
    title: "Healthcare Advice",
    desc: "Professional medical consultation",
  },
  {
    icon: CreditCard,
    title: "POS Services",
    desc: "Easy and convenient point-of-sale solutions",
  },
];

export const Services = () => (
  <section id="services" className="py-20 mb-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1
        style={{ fontWeight: "bolder" }}
        className="text-4xl md:text-6xl text-center mb-4 py-4"
      >
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
