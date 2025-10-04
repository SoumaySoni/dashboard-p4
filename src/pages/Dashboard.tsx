import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dashboardStats, recentOrders, salesChartData } from '@/lib/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your store today.</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Revenue"
            value={dashboardStats.revenue}
            prefix="$"
            icon={DollarSign}
            trend={12.5}
            delay={0}
          />
          <StatsCard
            title="Total Orders"
            value={dashboardStats.orders}
            icon={ShoppingCart}
            trend={8.2}
            delay={0.1}
          />
          <StatsCard
            title="Total Customers"
            value={dashboardStats.customers}
            icon={Users}
            trend={15.3}
            delay={0.2}
          />
          <StatsCard
            title="Growth Rate"
            value={dashboardStats.growth}
            suffix="%"
            icon={TrendingUp}
            trend={5.7}
            delay={0.3}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glassmorphism border-border/50">
              <CardHeader>
                <CardTitle>Sales Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesChartData}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(250, 40%, 20%)" />
                    <XAxis dataKey="month" stroke="hsl(215, 20.2%, 65.1%)" />
                    <YAxis stroke="hsl(215, 20.2%, 65.1%)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(249, 50%, 10%)',
                        border: '1px solid hsl(250, 40%, 20%)',
                        borderRadius: '8px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="hsl(262, 83%, 58%)" 
                      fillOpacity={1} 
                      fill="url(#colorSales)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glassmorphism border-border/50">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.slice(0, 5).map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.amount}</p>
                        <Badge 
                          variant={
                            order.status === 'completed' ? 'default' :
                            order.status === 'processing' ? 'secondary' :
                            order.status === 'pending' ? 'outline' :
                            'destructive'
                          }
                          className="mt-1"
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
