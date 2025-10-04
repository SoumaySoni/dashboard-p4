import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { User, Bell, Lock, CreditCard } from 'lucide-react';

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
        </motion.div>

        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glassmorphism border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <CardTitle>Profile Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 234 567 8900" className="bg-background/50" />
              </div>
              <Button className="gradient-primary hover-glow">Save Changes</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glassmorphism border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email about your account activity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order Updates</p>
                  <p className="text-sm text-muted-foreground">Get notified when orders are placed</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Low Stock Alerts</p>
                  <p className="text-sm text-muted-foreground">Alert when products are running low</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glassmorphism border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <CardTitle>Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" className="bg-background/50" />
              </div>
              <Button className="gradient-primary hover-glow">Update Password</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Billing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glassmorphism border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <CardTitle>Billing Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 rounded bg-gradient-primary" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
