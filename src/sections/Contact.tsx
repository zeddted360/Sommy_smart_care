import { PhoneCall, Clock, MapPin } from "lucide-react";
import { Card,CardContent } from "@/components/ui/card";

interface ContactItem {
  icon: any;
  title: string;
  info: string[];
}

const contactItems: ContactItem[] = [
  { icon: PhoneCall, title: "Phone", info: ["+2349025536929"] },
  {
    icon: Clock,
    title: "Hours",
    info: ["Mon-Sat: 9AM - 8PM", "Sun: 10AM - 6PM"],
  },
  {
    icon: MapPin,
    title: "Location",
    info: ["58 Ogoja - Abakaliki Road", "Nidiechi, Igbeagu"],
  },
];



export const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 mb-8 mt-8">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center  m-8">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactItems.map((contact, idx) => (
          <Card
            key={idx}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-6 text-center">
              <contact.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              {contact.info.map((line, i) => (
                <p key={i} className="text-gray-600">
                  {line}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
