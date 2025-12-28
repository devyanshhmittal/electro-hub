import { Link, useLocation } from "react-router-dom";
import { Home, Gift, Info, Phone, ShoppingCart, User, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/hooks/useCart";
import { useIsManager } from "@/hooks/useUserRole";

const navLinks = [
  { to: "/", label: "HOME", icon: Home },
  { to: "/products", label: "PRODUCTS", icon: Gift },
  { to: "/about", label: "ABOUT", icon: Info },
  { to: "/contact", label: "CONTACT", icon: Phone },
];

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { cartCount } = useCart();
  const { isManager } = useIsManager();

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
          <Link
            to="/cart"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative ${
              location.pathname === "/cart"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            CART
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {isManager && (
            <Link to="/manager">
              <Button variant="outline" size="sm" className="rounded-full">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            </Link>
          )}
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => signOut()}
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm" className="rounded-full">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
