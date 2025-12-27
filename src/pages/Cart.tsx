import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Shopping Cart - ElectroHub</title>
        <meta name="description" content="View and manage your ElectroHub shopping cart." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-16">
            <div className="container">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Your <span className="text-gradient">Cart</span>
              </h1>

              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-2">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Looks like you haven't added anything to your cart yet. Start
                  shopping to find amazing electronics!
                </p>
                <Link to="/products">
                  <Button size="lg" className="rounded-full">
                    Browse Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
