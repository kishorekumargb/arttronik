
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlurImage from '@/components/ui/BlurImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Products = () => {
  const [activeTab, setActiveTab] = useState('diagnostics');

  const diagnosticsProducts = [
    {
      id: 1,
      name: 'POLYMERASE CHAIN REACTION (PCR)',
      category: 'Molecular Diagnostics',
      description: 'A cutting-edge molecular diagnostic tool for detecting genetic material from specific organisms, particularly viruses, with high accuracy.',
      image: 'https://www.merillife.com/uploads/products/PCR/pcr.jpg'
    },
    {
      id: 2,
      name: 'AUTOMATIC BIOCHEMISTRY ANALYZER',
      category: 'Lab Equipment',
      description: 'Advanced automation for clinical chemistry with seamless reagent handling and precise results for accurate diagnosis.',
      image: 'https://www.merillife.com/uploads/products/BIOCHEM/biochem.jpg'
    },
    {
      id: 3,
      name: 'CLINICAL CHEMISTRY ANALYZER',
      category: 'Lab Equipment',
      description: 'Versatile analyzer with multi-parameter testing capabilities for routine biochemistry and specialized tests.',
      image: 'https://www.merillife.com/uploads/products/BIOCHEM/chem.jpg'
    },
    {
      id: 4,
      name: 'HEMATOLOGY ANALYZER',
      category: 'Hematology',
      description: 'Comprehensive blood analysis system for complete blood count and differential with advanced cell detection technology.',
      image: 'https://www.merillife.com/uploads/products/HAEMATOLOGY/haematology.jpg'
    }
  ];

  const criticalCareProducts = [
    {
      id: 1,
      name: 'Ventilator System',
      category: 'Respiratory',
      description: 'Advanced ventilator with multiple ventilation modes for critical care patients.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: 2,
      name: 'Patient Monitor',
      category: 'Monitoring',
      description: 'Comprehensive patient monitoring system for vital signs and physiological parameters.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      name: 'Infusion Pump',
      category: 'Medication Delivery',
      description: 'Precision infusion pump for controlled administration of medications and fluids.',
      image: 'https://images.unsplash.com/photo-1583912262712-c884d51eb1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      name: 'Defibrillator',
      category: 'Cardiac Care',
      description: 'Advanced defibrillator with monitoring capabilities for cardiac emergencies.',
      image: 'https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const ProductCard = ({ product, index }: { product: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden hover-scale"
    >
      <div className="h-56 overflow-hidden">
        <BlurImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-arttronik-primary/10 text-arttronik-primary rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <Button variant="outline" className="w-full border-arttronik-primary text-arttronik-primary hover:bg-arttronik-primary/5">
          Learn More
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="page-fade-in">
      <Navbar />
      
      <main>
        {/* Hero Section */}
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
                Our Products
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
                Discover our range of high-quality medical equipment for critical care and diagnostics.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="section-container">
          <Tabs defaultValue="diagnostics" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="glass">
                <TabsTrigger 
                  value="diagnostics" 
                  className="px-6 py-3 data-[state=active]:bg-arttronik-primary data-[state=active]:text-white"
                >
                  Diagnostics
                </TabsTrigger>
                <TabsTrigger 
                  value="critical-care" 
                  className="px-6 py-3 data-[state=active]:bg-arttronik-primary data-[state=active]:text-white"
                >
                  Critical Care
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="diagnostics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {diagnosticsProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="critical-care" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {criticalCareProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card-strong p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <BlurImage
                  src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Medical Equipment Background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90"></div>
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Need a Customized Solution?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-8"
                >
                  Our team of experts can help you find the perfect medical equipment solution for your specific requirements.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link to="/contact">
                    <Button className="bg-arttronik-primary hover:bg-arttronik-dark text-white rounded-md px-8 py-6 text-base font-medium transition-all duration-300">
                      Contact Our Team
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
