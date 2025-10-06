import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: Package, label: 'Products', path: '/products' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 h-screen glassmorphism border-r border-border/50 sticky top-0 flex flex-col"
    >
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          Soumay Soni
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Premium Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                  isActive
                    ? "bg-primary/20 text-primary-foreground border border-primary/30 shadow-lg"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <div className="glassmorphism p-3 rounded-lg">
          <p className="text-xs text-muted-foreground">Version 2.0.0</p>
          <p className="text-xs text-muted-foreground">© 2024 Soumay Soni</p>
        </div>
      </div>
    </motion.aside>
  );
};
