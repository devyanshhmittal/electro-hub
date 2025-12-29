import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative min-h-[85vh] flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">WELCOME TO 
ELECTRO
HUB<br />
                <span className="text-gradient italic">ELECTRO</span>
                <br />
                <span className="text-gradient italic">HUB</span>
              </h1>
            </div>

            <div className="space-y-4 max-w-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">Discover the future of home technology, where innovation meets convenience. Every appliance is carefully selected to enhance your everyday life.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From smart home devices to premium kitchen appliances, our
                collection brings cutting-edge technology with timeless design.
                Find the perfect device that powers your lifestyle.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="rounded-full">
                  Shop Collection
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative animate-slide-in-right" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/40 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-primary/10 to-secondary rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-display text-xl font-semibold text-foreground/80">Premium Electronics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;