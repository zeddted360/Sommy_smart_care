"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LearnMore = () => {
  const router = useRouter();

  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <section className="text-center space-y-6 mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Learn More About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we provide top-notch healthcare services and quality
            medicines to enhance your well-being.
          </p>
        </section>

        <section className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              We aim to bridge the gap between professional healthcare and
              accessibility, delivering trust and excellence in every
              interaction.
            </p>
            <div className="mt-4">
              <p className="text-gray-600 font-medium">We deal in:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Generic over-the-counter drugs</li>
                <li>Generic prescription drugs</li>
                <li>Branded prescription drugs and self-care products</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Services
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>24/7 access to quality medicines</li>
              <li>Expert healthcare consultations</li>
              <li>Personalized healthcare advice</li>
              <li>Fast and reliable delivery services</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mt-2">
              We prioritize your health with unmatched dedication, quality
              products, and a seamless customer experience.
            </p>
          </div>
        </section>

        <div className="text-center mt-10">
          <Button
            size="lg"
            onClick={() => router.back()}
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LearnMore;
