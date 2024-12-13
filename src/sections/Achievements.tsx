import { Users, Building, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  icon: any;
  value: string;
  label: string;
}

interface TestimonialItem {
  rating: number;
  text: string;
  author: string;
}

const stats: StatItem[] = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Building, value: "10+", label: "Years Experience" },
  { icon: Award, value: "15+", label: "Healthcare Awards" },
  { icon: Star, value: "4.9", label: "Customer Rating" },
];

const testimonials: TestimonialItem[] = [
  {
    rating: 5,
    text: "Excellent service and knowledgeable staff. Always helpful with prescriptions and medical advice.",
    author: "Nwibo Joseph",
  },
  {
    rating: 5,
    text: "The POS system makes transactions smooth and quick. Great inventory of medical supplies.",
    author: "Zedd",
  },
  {
    rating: 5,
    text: "Professional healthcare advice and competitive prices. My go-to pharmacy for all medical needs.",
    author: "Ekene James",
  },
];

const icons: StatItem[] = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Building, value: "8+", label: "Years Experience" },
  { icon: Award, value: "15+", label: "Healthcare Awards" },
  { icon: Star, value: "8.9", label: "Customer Rating" },
];

export const Achievements = () => (
  <section
    id="achievements"
    className="bg-white p-6 md:p-8 mt-8 rounded-lg shadow-lg"
  >
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 mt-4">
        Our Achievements
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-12  ">
        {icons.map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-4 py-2 rounded-lg  bg-gray-50 hover:bg-blue-50 transition-colors shadow-sm"
          >
            <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xl md:text-3xl font-bold text-gray-900">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials with improved visuals */}
      <h3 className="text-xl md:text-3xl font-bold text-center mb-8 pt-4">
        What Our Customers Say
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <Card
            key={idx}
            className="transition-all duration-300 hover:shadow-lg rounded-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-sm text-gray-800">
                - {testimonial.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
