
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const elapsedPercentage = Math.min(progress / (duration * 1000), 1);
      const easedProgress = easeOutExpo(elapsedPercentage);
      
      setCount(Math.floor(easedProgress * end));
      
      if (elapsedPercentage < 1) {
        animationFrameId = requestAnimationFrame(startAnimation);
      }
    };
    
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(startAnimation);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isInView, delay]);
  
  // Easing function for smoother counting
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="text-center"
    >
      <span className="text-4xl font-bold text-arttronik-primary">
        {prefix}{count}{suffix}
      </span>
    </motion.div>
  );
};

export default AnimatedCounter;
