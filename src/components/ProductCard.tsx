import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  image: string | null;
  category: string | null;
}

const ProductCard = ({ id, name, price, originalPrice, image, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id);
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
      <div className="aspect-square bg-secondary/50 relative overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          size="icon"
          className="absolute bottom-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-5 space-y-2">
        {category && (
          <p className="text-xs uppercase tracking-wider text-primary font-medium">
            {category}
          </p>
        )}
        <h3 className="font-display text-lg font-semibold line-clamp-1">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">₹{Number(price).toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{Number(originalPrice).toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
