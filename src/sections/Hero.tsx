"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Hero = () => {
    const router = useRouter();
  const handleShopNow = () => {
    const phone = "09025536929";
    const whatsappUrl = `https://wa.me/${phone}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-blue-50 to-white py-20 mb-4"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-lg">Your Trusted</span>{" "}
            <span className="text-blue-600 text-2xl">Healthcare Partner</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto py-4">
            Quality medicines and professional healthcare services at your
            fingertips
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="hover:bg-blue-700"
              onClick={handleShopNow}
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>router.push("/learn-more")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
