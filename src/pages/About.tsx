import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Truck, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All products come with manufacturer warranty and our satisfaction guarantee.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $99. Express delivery available.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is here to help you anytime, anywhere.",
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Competitive pricing with price match guarantee on all products.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - ElectroHub</title>
        <meta
          name="description"
          content="Learn about ElectroHub's mission to bring premium electronic appliances to your home with exceptional service and quality."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                <h1 className="font-display text-4xl md:text-5xl font-bold">
                  About <span className="text-gradient">ElectroHub</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded with a passion for technology and customer satisfaction,
                  ElectroHub has been your trusted partner in bringing the latest
                  electronic innovations to your doorstep since 2020.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that everyone deserves access to premium quality
                  electronics that enhance daily life. Our carefully curated
                  selection combines cutting-edge technology with timeless design,
                  ensuring every product we offer meets our high standards.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
