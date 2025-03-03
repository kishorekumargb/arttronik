
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Microscope, HeartPulse, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Card from '@/components/ui/card'; // Changed from 'Card' to 'card' to match shadcn component naming
import BlurImage from '@/components/ui/BlurImage';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const Index = () => {
  return (
    <div className="page-fade-in">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Preview Section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto text-gray-700"
            >
              Arttronik provides comprehensive medical equipment solutions to healthcare facilities, from sales to maintenance and technical support.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              title="Equipment Sales"
              description="Premium medical equipment for critical care and diagnostics from leading manufacturers worldwide."
              icon={<Stethoscope />}
              delay={1}
            />
            <Card 
              title="Maintenance & Repair"
              description="Professional maintenance and repair services to ensure your equipment operates at peak performance."
              icon={<HeartPulse />}
              delay={2}
            />
            <Card 
              title="Technical Support"
              description="24/7 technical support from our team of experienced engineers and medical equipment specialists."
              icon={<Shield />}
              delay={3}
            />
            <Card 
              title="Quality Assurance"
              description="Rigorous quality control and compliance with international medical equipment standards."
              icon={<Microscope />}
              delay={4}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-arttronik-primary text-arttronik-primary hover:bg-arttronik-primary/5 rounded-md px-6">
                View All Services
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Product Categories */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Our Product Categories
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl mx-auto text-gray-700"
              >
                Discover our range of high-quality medical equipment for critical care and diagnostics.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hover-scale"
              >
                <Link to="/products" className="block relative rounded-xl overflow-hidden shadow-lg h-80">
                  <BlurImage 
                    src="https://images.unsplash.com/photo-1579154392429-a661389fb22a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Diagnostics Equipment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arttronik-deep/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium inline-block mb-2">
                      Medical Devices
                    </div>
                    <h3 className="text-white text-2xl font-bold">Diagnostics</h3>
                    <p className="text-white/90 mt-1">Advanced diagnostic solutions</p>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hover-scale"
              >
                <Link to="/products" className="block relative rounded-xl overflow-hidden shadow-lg h-80">
                  <BlurImage 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Critical Care Equipment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arttronik-deep/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium inline-block mb-2">
                      Life Support
                    </div>
                    <h3 className="text-white text-2xl font-bold">Critical Care</h3>
                    <p className="text-white/90 mt-1">Reliable life-saving equipment</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="bg-gradient-to-r from-arttronik-deep to-arttronik-primary text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <AnimatedCounter end={5} suffix="+" delay={0} />
                <p className="mt-2 text-blue-100">Years of Experience</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={500} suffix="+" delay={0.2} />
                <p className="mt-2 text-blue-100">Clients</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={1000} suffix="+" delay={0.4} />
                <p className="mt-2 text-blue-100">Equipment Installed</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={24} suffix="/7" delay={0.6} />
                <p className="mt-2 text-blue-100">Technical Support</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="section-container">
          <div className="glass-card-strong p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <BlurImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Medical Equipment Background"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Ready to Elevate Your Healthcare Facility?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
              >
                Contact us today to discover how our advanced medical equipment solutions can transform patient care at your facility.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link to="/contact">
                  <Button className="bg-arttronik-primary hover:bg-arttronik-dark text-white rounded-md px-8 py-6 text-base font-medium transition-all duration-300">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
