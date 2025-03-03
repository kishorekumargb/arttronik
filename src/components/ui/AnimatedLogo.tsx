
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
          className="w-10 h-10 rounded-lg bg-gradient-to-tr from-arttronik-deep via-arttronik-primary to-arttronik-light flex items-center justify-center mr-3"
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white font-bold text-lg">A</span>
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-bold text-arttronik-primary text-xl">Arttronik</span>
          <span className="font-medium text-arttronik-light text-xl"> Meditech</span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;
