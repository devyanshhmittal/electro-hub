import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Helmet } from "react-helmet-async";

const allProducts = [
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
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Audio",
  },
  {
    id: 6,
    name: "Smart Coffee Maker",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    category: "Kitchen",
  },
  {
    id: 7,
    name: "Robot Vacuum Cleaner",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    category: "Smart Home",
  },
  {
    id: 8,
    name: "4K Webcam Pro",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&h=500&fit=crop",
    category: "Computers",
  },
];

const Products = () => {
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

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
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

export default Products;
