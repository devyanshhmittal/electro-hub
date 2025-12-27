import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ElectroHub - Premium Electronic Appliances</title>
        <meta
          name="description"
          content="Discover the future of home technology at ElectroHub. Shop premium TVs, audio equipment, smart home devices, and kitchen appliances."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <FeaturedProducts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
