
import React from 'react';

const Watermark: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <div className="w-[600px] h-[600px] opacity-[0.03] transform rotate-12">
        <img 
          src="/lovable-uploads/5ec210ab-d19c-4ca8-8f86-0b5d024a0dde.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Watermark;
