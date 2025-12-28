import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Package, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useIsManager } from "@/hooks/useUserRole";
import { AddProductDialog } from "@/components/manager/AddProductDialog";
import { ProductsTable } from "@/components/manager/ProductsTable";
import { useProducts } from "@/hooks/useProducts";

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isManager, isLoading: roleLoading } = useIsManager();
  const { data: products } = useProducts();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!authLoading && !roleLoading && user && !isManager) {
      navigate("/");
    }
  }, [user, authLoading, roleLoading, isManager, navigate]);

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user || !isManager) {
    return null;
  }

  const totalProducts = products?.length ?? 0;
  const inStockProducts = products?.filter((p) => p.stock_quantity > 0).length ?? 0;
  const outOfStockProducts = totalProducts - inStockProducts;

  return (
    <>
      <Helmet>
        <title>Manager Dashboard | TechElite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <LayoutDashboard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Manager Dashboard</h1>
              <p className="text-muted-foreground">Manage your inventory</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Products</p>
                  <p className="text-2xl font-bold">{totalProducts}</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Package className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">In Stock</p>
                  <p className="text-2xl font-bold">{inStockProducts}</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <Package className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Out of Stock</p>
                  <p className="text-2xl font-bold">{outOfStockProducts}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Inventory</h2>
              <AddProductDialog />
            </div>
            <ProductsTable />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ManagerDashboard;
