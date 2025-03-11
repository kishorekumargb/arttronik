
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-arttronik-primary to-arttronik-deep text-white py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-arttronik-primary/30 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Arttronik
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-1 bg-white/50 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-100"
          >
            Revolutionizing healthcare through advanced medical technology
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
