
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
    },
    {
      id: 5,
      name: 'ELISA READER & WASHER',
      category: 'Immunology',
      description: 'High-precision microplate reader and washer system for ELISA tests with advanced optical technology.',
      image: 'https://www.merillife.com/uploads/products/ELISA/elisa.jpg'
    },
    {
      id: 6,
      name: 'ELECTROLYTE ANALYZER',
      category: 'Lab Equipment',
      description: 'Specialized analyzer for precise measurement of electrolytes in blood and other body fluids.',
      image: 'https://www.merillife.com/uploads/products/ELECTROLYTE/electrolyte.jpg'
    },
    {
      id: 7,
      name: 'COAGULATION ANALYZER',
      category: 'Hematology',
      description: 'Advanced system for testing blood coagulation parameters with high accuracy and reliability.',
      image: 'https://www.merillife.com/uploads/products/COAGULATION/coagulation.jpg'
    },
    {
      id: 8,
      name: 'URINE ANALYZER',
      category: 'Urinalysis',
      description: 'Automated urine analysis system for comprehensive urinalysis with reliable results.',
      image: 'https://www.merillife.com/uploads/products/URINE/urine.jpg'
    },
    {
      id: 9,
      name: 'HBA1C ANALYZER',
      category: 'Diabetes Care',
      description: 'Specialized analyzer for measuring glycated hemoglobin levels for diabetes monitoring.',
      image: 'https://www.merillife.com/uploads/products/HBA1C/hba1c.jpg'
    },
    {
      id: 10,
      name: 'BLOOD GAS ANALYZER',
      category: 'Critical Care',
      description: 'Rapid analysis system for blood gases and electrolytes for critical care applications.',
      image: 'https://www.merillife.com/uploads/products/BLOOD-GAS/blood-gas.jpg'
    },
    {
      id: 11,
      name: 'IMMUNO ANALYZER',
      category: 'Immunology',
      description: 'Advanced system for immunoassay testing with high sensitivity and precision.',
      image: 'https://www.merillife.com/uploads/products/IMMUNO/immuno.jpg'
    },
    {
      id: 12,
      name: 'ESR ANALYZER',
      category: 'Hematology',
      description: 'Automated erythrocyte sedimentation rate analyzer for accurate inflammation assessment.',
      image: 'https://www.merillife.com/uploads/products/ESR/esr.jpg'
    }
  ];

  const criticalCareProducts = [
    {
      id: 1,
      name: 'BeneVision N Series Patient Monitor',
      category: 'Patient Monitoring',
      description: 'Advanced patient monitor with comprehensive monitoring capabilities and intuitive interface.',
      image: 'https://maestroselectronics.com/api/images/1635514996-Untitled design (35).png'
    },
    {
      id: 2,
      name: 'Maestros Stellar ICU Ventilator',
      category: 'Ventilation',
      description: 'High-performance ICU ventilator with multiple ventilation modes for critical care patients.',
      image: 'https://maestroselectronics.com/api/images/1655796268-M-2022 3.png'
    },
    {
      id: 3,
      name: 'Maestros Transport Ventilator',
      category: 'Ventilation',
      description: 'Portable ventilator designed for patient transport with reliable performance.',
      image: 'https://maestroselectronics.com/api/images/1649844855-Untitled design (6).png'
    },
    {
      id: 4,
      name: 'Maestros EtCO2 Module',
      category: 'Respiratory Monitoring',
      description: 'Accurate end-tidal CO2 monitoring module for respiratory assessment.',
      image: 'https://maestroselectronics.com/api/images/1635514765-Untitled design (34).png'
    },
    {
      id: 5,
      name: 'Maestros Defibrillator',
      category: 'Cardiac Care',
      description: 'Advanced defibrillator with monitoring capabilities for cardiac emergencies.',
      image: 'https://maestroselectronics.com/api/images/1650364493-bene heart d3 clear.png'
    },
    {
      id: 6,
      name: 'Maestros Syringe Pump',
      category: 'Medication Delivery',
      description: 'Precision syringe pump for controlled administration of medications.',
      image: 'https://maestroselectronics.com/api/images/1649844700-Untitled design (5).png'
    },
    {
      id: 7,
      name: 'SV300 Ventilator',
      category: 'Ventilation',
      description: 'Versatile ventilator for various clinical settings with advanced features.',
      image: 'https://maestroselectronics.com/api/images/1649843780-SV300.png'
    },
    {
      id: 8, 
      name: 'CRRT Machine',
      category: 'Renal Therapy',
      description: 'Continuous renal replacement therapy system for critical care patients with kidney dysfunction.',
      image: 'https://maestroselectronics.com/api/images/1650364680-crrt.png'
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
