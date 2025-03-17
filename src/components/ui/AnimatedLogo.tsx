
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedLogo: React.FC = () => {
  return (
    <Link to="/">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-12 h-12 flex items-center justify-center mr-3" // Increased from w-10 h-10 to w-12 h-12
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/lovable-uploads/d15b3a59-c901-4fbd-962f-5c7aeca834e9.png" 
            alt="Arttronik Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-bold text-arttronik-primary text-xl">Arttronik</span>
          <span className="font-bold text-arttronik-light text-xl"> Meditech</span> {/* Changed from font-medium to font-bold for consistency */}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;
