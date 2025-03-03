
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <motion.div
      className={`overflow-hidden relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ filter: "blur(20px)", scale: 1.1 }}
        animate={{ 
          filter: loaded ? "blur(0px)" : "blur(20px)",
          scale: loaded ? 1 : 1.1
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
};

export default BlurImage;
