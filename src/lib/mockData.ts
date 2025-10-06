// Mock data for the dashboard - easily replaceable with real API data

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  sales: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  orders: number;
  spent: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

export interface DashboardStats {
  revenue: number;
  orders: number;
  customers: number;
  growth: number;
}

export const dashboardStats: DashboardStats = {
  revenue: 124567,
  orders: 1543,
  customers: 892,
  growth: 23.5
};

export const recentOrders: Order[] = [
  { id: 'ORD-001', customer: 'Soumay Soni', product: 'Premium Headphones', amount: 299.99, status: 'completed', date: '2024-01-15' },
  { id: 'ORD-002', customer: 'Soujay Soni', product: 'Wireless Mouse', amount: 49.99, status: 'processing', date: '2024-01-15' },
  { id: 'ORD-003', customer: 'Neeraj Soni', product: 'Mechanical Keyboard', amount: 159.99, status: 'pending', date: '2024-01-14' },
  { id: 'ORD-004', customer: 'Mayu', product: '4K Monitor', amount: 499.99, status: 'completed', date: '2024-01-14' },
  { id: 'ORD-005', customer: 'Ahana', product: 'USB-C Hub', amount: 79.99, status: 'cancelled', date: '2024-01-13' },
  { id: 'ORD-006', customer: 'Manjari', product: 'Laptop Stand', amount: 89.99, status: 'completed', date: '2024-01-13' },
];

export const products: Product[] = [
  { id: 'PRD-001', name: 'Premium Headphones', category: 'Audio', price: 299.99, stock: 45, image: '/placeholder.svg', sales: 234 },
  { id: 'PRD-002', name: 'Wireless Mouse', category: 'Accessories', price: 49.99, stock: 120, image: '/placeholder.svg', sales: 567 },
  { id: 'PRD-003', name: 'Mechanical Keyboard', category: 'Accessories', price: 159.99, stock: 67, image: '/placeholder.svg', sales: 345 },
  { id: 'PRD-004', name: '4K Monitor', category: 'Displays', price: 499.99, stock: 23, image: '/placeholder.svg', sales: 189 },
  { id: 'PRD-005', name: 'USB-C Hub', category: 'Accessories', price: 79.99, stock: 89, image: '/placeholder.svg', sales: 423 },
  { id: 'PRD-006', name: 'Laptop Stand', category: 'Accessories', price: 89.99, stock: 54, image: '/placeholder.svg', sales: 298 },
  { id: 'PRD-007', name: 'Webcam HD', category: 'Accessories', price: 129.99, stock: 78, image: '/placeholder.svg', sales: 267 },
  { id: 'PRD-008', name: 'Gaming Chair', category: 'Furniture', price: 399.99, stock: 15, image: '/placeholder.svg', sales: 145 },
];

export const customers: Customer[] = [
  { id: 'CST-001', name: 'Soumay Soni', email: 'soumay@example.com', orders: 12, spent: 2459.89, joinDate: '2023-06-15', status: 'active' },
  { id: 'CST-002', name: 'Soujay Soni', email: 'soujay@example.com', orders: 8, spent: 1234.56, joinDate: '2023-07-22', status: 'active' },
  { id: 'CST-003', name: 'Neeraj Soni', email: 'neeraj@example.com', orders: 15, spent: 3567.89, joinDate: '2023-05-10', status: 'active' },
  { id: 'CST-004', name: 'Mayu', email: 'mayu@example.com', orders: 5, spent: 876.43, joinDate: '2023-08-30', status: 'active' },
  { id: 'CST-005', name: 'Ahana', email: 'ahana@example.com', orders: 3, spent: 456.78, joinDate: '2023-09-12', status: 'inactive' },
  { id: 'CST-006', name: 'Manjari', email: 'manjari@example.com', orders: 20, spent: 5432.10, joinDate: '2023-04-05', status: 'active' },
];

export const salesChartData = [
  { month: 'Jan', sales: 12000, orders: 145 },
  { month: 'Feb', sales: 15000, orders: 178 },
  { month: 'Mar', sales: 18000, orders: 210 },
  { month: 'Apr', sales: 22000, orders: 256 },
  { month: 'May', sales: 26000, orders: 298 },
  { month: 'Jun', sales: 31000, orders: 345 },
];

export const revenueSourcesData = [
  { name: 'Direct', value: 45, color: 'hsl(262, 83%, 58%)' },
  { name: 'Referral', value: 25, color: 'hsl(214, 95%, 60%)' },
  { name: 'Social', value: 20, color: 'hsl(281, 83%, 63%)' },
  { name: 'Other', value: 10, color: 'hsl(38, 92%, 50%)' },
];
