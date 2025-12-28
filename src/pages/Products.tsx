import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Helmet } from "react-helmet-async";
import { useProducts } from "@/hooks/useProducts";
import { Loader2 } from "lucide-react";

const Products = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <>
      <Helmet>
        <title>Products - ElectroHub</title>
        <meta
          name="description"
          content="Browse our complete collection of premium electronic appliances including TVs, audio equipment, smart home devices, and more."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-16">
            <div className="container">
              <div className="mb-12 space-y-4">
                <h1 className="font-display text-4xl md:text-5xl font-bold">
                  Our <span className="text-gradient">Products</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                  Explore our complete collection of premium electronic appliances.
                  Each product is carefully selected to bring you the best in
                  technology and design.
                </p>
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
