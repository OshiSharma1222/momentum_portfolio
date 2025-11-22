import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ContactUs from "@/components/ContactUs";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Team from "@/components/Team";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Achievements />
      <Gallery />
      <Team />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
