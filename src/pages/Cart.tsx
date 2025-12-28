import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ShoppingBag, ArrowRight, Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";

const Cart = () => {
  const { user } = useAuth();
  const { cartItems, loading, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!user) {
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
                    Please login to view your cart
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Sign in to access your shopping cart and complete your purchase.
                  </p>
                  <Link to="/auth">
                    <Button size="lg" className="rounded-full">
                      Login
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
  }

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

              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : cartItems.length === 0 ? (
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
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 bg-card rounded-2xl p-4 shadow-card"
                      >
                        <img
                          src={item.products.image_url || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"}
                          alt={item.products.name}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-display font-semibold">
                              {item.products.name}
                            </h3>
                            <p className="text-primary font-bold">
                              ₹{Number(item.products.price).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <p className="font-bold">
                            ₹{(Number(item.products.price) * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-card h-fit sticky top-24">
                    <h2 className="font-display text-xl font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button className="w-full rounded-full" size="lg">
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
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

export default Cart;
