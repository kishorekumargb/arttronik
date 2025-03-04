
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full hover-scale border-0 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-full bg-arttronik-primary/10 text-arttronik-primary">
              {icon}
            </div>
            <CardTitle className="text-lg font-medium text-gray-900">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
