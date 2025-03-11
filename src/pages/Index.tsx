
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import { Card } from "@/components/ui/card"; // Fixed the import case to use lowercase "card"
import FeatureCard from "@/components/ui/FeatureCard";
import { motion } from "framer-motion";
import { Activity, HeartPulse, Lightbulb, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="page-fade-in">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Arttronik
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We combine innovative technology with medical expertise
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Innovative Solutions"
            description="Cutting-edge medical technology that pushes the boundaries of what's possible in healthcare."
            icon={<Lightbulb className="w-5 h-5" />}
            delay={0.1}
          />
          
          <FeatureCard
            title="Quality Assurance"
            description="Rigorous testing and quality control processes that ensure safe and reliable equipment."
            icon={<Shield className="w-5 h-5" />}
            delay={0.2}
          />
          
          <FeatureCard
            title="Patient-Centered"
            description="Designed with patients in mind, ensuring comfort and dignity during medical procedures."
            icon={<HeartPulse className="w-5 h-5" />}
            delay={0.3}
          />
          
          <FeatureCard
            title="Performance"
            description="High-performance equipment that delivers accurate results and efficient operation."
            icon={<Activity className="w-5 h-5" />}
            delay={0.4}
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
