import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smart 4K Ultra HD TV",
    price: 799.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
    category: "Television",
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Audio",
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&h=500&fit=crop",
    category: "Smart Home",
  },
  {
    id: 4,
    name: "Professional Blender Pro",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&h=500&fit=crop",
    category: "Kitchen",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Explore our handpicked selection of premium electronics designed to
              elevate your lifestyle.
            </p>
          </div>
          <Link to="/products">
            <Button variant="ghost" className="group">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
