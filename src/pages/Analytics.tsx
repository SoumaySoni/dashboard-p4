import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { salesChartData, revenueSourcesData, products } from '@/lib/mockData';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Analytics = () => {
  const topProducts = products.sort((a, b) => b.sales - a.sales).slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-2">Detailed insights into your store performance</p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales & Orders Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glassmorphism border-border/50">
              <CardHeader>
                <CardTitle>Sales & Orders Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesChartData}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(214, 95%, 60%)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(214, 95%, 60%)" stopOpacity={0}/>
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
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="hsl(262, 83%, 58%)" 
                      fillOpacity={1} 
                      fill="url(#colorSales)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="orders" 
                      stroke="hsl(214, 95%, 60%)" 
                      fillOpacity={1} 
                      fill="url(#colorOrders)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Revenue Sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glassmorphism border-border/50">
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueSourcesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {revenueSourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="glassmorphism border-border/50">
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topProducts}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(250, 40%, 20%)" />
                    <XAxis dataKey="name" stroke="hsl(215, 20.2%, 65.1%)" />
                    <YAxis stroke="hsl(215, 20.2%, 65.1%)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(249, 50%, 10%)',
                        border: '1px solid hsl(250, 40%, 20%)',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="sales" fill="hsl(262, 83%, 58%)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
