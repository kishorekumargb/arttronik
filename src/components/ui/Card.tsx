
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      className={`glass-card p-6 md:p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)" }}
    >
      {icon && (
        <div className="text-arttronik-primary mb-4 text-3xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-arttronik-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default Card;
