import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/services";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { WelcomeMessage } from "./ui/WelcomeMessage";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WelcomeMessage/>
      <Header />
      <main>
        <Hero />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
