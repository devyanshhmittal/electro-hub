import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import type { Tables } from "@/integrations/supabase/types";

type CartItem = Tables<"cart_items"> & {
  products: Tables<"products">;
};

export const useCart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    if (!user) {
      setCartItems([]);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("cart_items")
      .select("*, products(*)")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching cart:", error);
    } else {
      setCartItems(data as CartItem[]);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (productId: string, quantity: number = 1) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return false;
    }

    // Check if product already in cart
    const existing = cartItems.find((item) => item.product_id === productId);

    if (existing) {
      const { error } = await supabase
        .from("cart_items")
        .update({ quantity: existing.quantity + quantity })
        .eq("id", existing.id);

      if (error) {
        toast.error("Failed to update cart");
        return false;
      }
    } else {
      const { error } = await supabase.from("cart_items").insert({
        user_id: user.id,
        product_id: productId,
        quantity,
      });

      if (error) {
        toast.error("Failed to add to cart");
        return false;
      }
    }

    toast.success("Added to cart!");
    fetchCart();
    return true;
  };

  const updateQuantity = async (cartItemId: string, quantity: number) => {
    if (quantity < 1) {
      return removeFromCart(cartItemId);
    }

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("id", cartItemId);

    if (error) {
      toast.error("Failed to update quantity");
      return false;
    }

    fetchCart();
    return true;
  };

  const removeFromCart = async (cartItemId: string) => {
    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemId);

    if (error) {
      toast.error("Failed to remove item");
      return false;
    }

    toast.success("Item removed from cart");
    fetchCart();
    return true;
  };

  const clearCart = async () => {
    if (!user) return;

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("user_id", user.id);

    if (error) {
      toast.error("Failed to clear cart");
      return false;
    }

    setCartItems([]);
    return true;
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + Number(item.products.price) * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
    refetch: fetchCart,
  };
};
