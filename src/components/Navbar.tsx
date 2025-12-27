import { Link, useLocation } from "react-router-dom";
import { Home, Gift, Info, Phone, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "HOME", icon: Home },
  { to: "/products", label: "PRODUCTS", icon: Gift },
  { to: "/about", label: "ABOUT", icon: Info },
  { to: "/contact", label: "CONTACT", icon: Phone },
  { to: "/cart", label: "CART", icon: ShoppingCart },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          <span className="text-foreground">Electro</span>
          <span className="text-gradient">Hub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/login">
          <Button variant="default" size="sm" className="rounded-full">
            <User className="h-4 w-4" />
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
