
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlurImage from '@/components/ui/BlurImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Stethoscope, Shield, HeartPulse, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Equipment Sales',
      description: 'Premium medical equipment for critical care and diagnostics from leading manufacturers worldwide.',
      icon: <Stethoscope className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1553&q=80',
      features: [
        'State-of-the-art diagnostic equipment',
        'Advanced critical care solutions',
        'Customized equipment packages',
        'Competitive pricing options',
        'Extended warranty options'
      ]
    },
    {
      title: 'Maintenance & Repair',
      description: 'Professional maintenance and repair services to ensure your equipment operates at peak performance.',
      icon: <HeartPulse className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Preventive maintenance programs',
        'Rapid response repair services',
        'Equipment calibration',
        'Performance optimization',
        'Detailed service documentation'
      ]
    },
    {
      title: 'Technical Support',
      description: '24/7 technical support from our team of experienced engineers and medical equipment specialists.',
      icon: <Shield className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Round-the-clock assistance',
        'Remote diagnostics and troubleshooting',
        'On-site technical support',
        'Operator training',
        'Software updates and upgrades'
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control and compliance with international medical equipment standards.',
      icon: <BarChart3 className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Comprehensive quality testing',
        'Regulatory compliance documentation',
        'Safety certifications',
        'Performance verification',
        'Equipment validation services'
      ]
    }
  ];

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
                Our Services
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
                Arttronik provides comprehensive medical equipment solutions to healthcare facilities, from sales to maintenance and technical support.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center mb-24 last:mb-0`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl relative">
                    <BlurImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-arttronik-deep/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 glass-card p-4 rounded-full">
                      <div className="text-arttronik-primary">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="glass-card p-8">
                    <h2 className="text-3xl font-bold text-arttronik-primary mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-arttronik-light mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button className="bg-arttronik-primary hover:bg-arttronik-dark text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card-strong p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <BlurImage
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
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
                  Need Specialized Service?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-8"
                >
                  Contact our service team to discuss your specific equipment maintenance and support requirements.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link to="/contact">
                    <Button className="bg-arttronik-primary hover:bg-arttronik-dark text-white rounded-md px-8 py-6 text-base font-medium transition-all duration-300">
                      Request Service
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

export default Services;
