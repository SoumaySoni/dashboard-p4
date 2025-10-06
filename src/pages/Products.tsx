import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/mockData';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold">Products</h1>
            <p className="text-muted-foreground mt-2">Manage your product inventory</p>
          </div>
          <Button className="gradient-primary hover-glow">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glassmorphism border-border/50">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-background/50"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <Card className="glassmorphism border-border/50 hover-glow overflow-hidden">
                <div className="aspect-square bg-muted/20 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <Badge variant={product.stock > 50 ? 'default' : 'destructive'}>
                      {product.stock} in stock
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-bold text-primary">Rs. {product.price}</p>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      {product.sales} sales
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Products;
