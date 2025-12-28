import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useProducts(true);

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

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.original_price}
                image={product.image_url}
                category={product.categories?.name || null}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
