import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import CountUp from 'react-countup';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: LucideIcon;
  trend?: number;
  delay?: number;
}

export const StatsCard = ({
  title,
  value,
  prefix = '',
  suffix = '',
  icon: Icon,
  trend,
  delay = 0
}: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="glassmorphism border-border/50 hover-glow overflow-hidden relative">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{title}</p>
              <h3 className="text-3xl font-bold text-foreground">
                {prefix}
                <CountUp end={value} duration={2} separator="," />
                {suffix}
              </h3>
              {trend !== undefined && (
                <p className={`text-sm mt-2 ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month
                </p>
              )}
            </div>
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
        <div className="absolute bottom-0 left-0 w-full h-1 gradient-primary" />
      </Card>
    </motion.div>
  );
};
