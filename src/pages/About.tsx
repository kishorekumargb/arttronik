
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import BlurImage from '@/components/ui/BlurImage';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
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
        
        {/* Company Overview */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded with a vision to revolutionize healthcare through advanced medical technology, Arttronik has been a trusted partner for healthcare facilities worldwide for over a decade.
              </p>
              <p className="text-gray-700 mb-4">
                We specialize in providing cutting-edge medical equipment for critical care and diagnostics, ensuring healthcare professionals have access to the tools they need to deliver exceptional patient care.
              </p>
              <p className="text-gray-700">
                Our team of experienced engineers and medical equipment specialists is dedicated to providing comprehensive solutions, from equipment selection and installation to maintenance and technical support.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <BlurImage
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Medical professionals with equipment"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card-strong px-6 py-4 max-w-xs">
                <h3 className="text-arttronik-primary font-semibold mb-1">Expert Team</h3>
                <p className="text-sm text-gray-700">Dedicated professionals with years of experience in medical technology</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-8 text-center">
                <AnimatedCounter end={5} suffix="+" delay={0} />
                <p className="mt-4 text-gray-700 font-medium">Years of Experience</p>
              </div>
              <div className="glass-card p-8 text-center">
                <AnimatedCounter end={500} suffix="+" delay={0.2} />
                <p className="mt-4 text-gray-700 font-medium">Clients</p>
              </div>
              <div className="glass-card p-8 text-center">
                <AnimatedCounter end={1000} suffix="+" delay={0.4} />
                <p className="mt-4 text-gray-700 font-medium">Equipment Installed</p>
              </div>
              <div className="glass-card p-8 text-center">
                <AnimatedCounter end={24} suffix="/7" delay={0.6} />
                <p className="mt-4 text-gray-700 font-medium">Technical Support</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-arttronik-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To provide healthcare facilities with reliable, cutting-edge medical equipment that enhances patient care and improves clinical outcomes.
              </p>
              <ul className="space-y-3">
                {[
                  "Deliver the highest quality medical equipment",
                  "Provide exceptional technical support and service",
                  "Continuously innovate and improve our offerings",
                  "Build lasting relationships with our clients"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-arttronik-light mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-arttronik-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be the global leader in medical equipment solutions, recognized for excellence, innovation, and our commitment to advancing healthcare worldwide.
              </p>
              <ul className="space-y-3">
                {[
                  "Pioneer advancements in medical technology",
                  "Set the industry standard for quality and reliability",
                  "Expand our global presence and impact",
                  "Contribute to improved healthcare outcomes globally"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-arttronik-light mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
        
        {/* Team */}
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
                Our Leadership Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl mx-auto text-gray-700"
              >
                Experienced professionals dedicated to advancing healthcare through innovative medical technology.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  position: "Founder & CEO",
                  bio: "With over 20 years of experience in the medical equipment industry, Dr. Kumar leads our vision for healthcare innovation.",
                  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  name: "Priya Sharma",
                  position: "Chief Technical Officer",
                  bio: "A brilliant engineer with expertise in medical devices and quality control systems, ensuring our products meet the highest standards.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                },
                {
                  name: "Vikram Mehta",
                  position: "Head of Operations",
                  bio: "Overseeing our global operations, Vikram ensures seamless delivery of our products and services to healthcare facilities worldwide.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <BlurImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-arttronik-primary">{member.name}</h3>
                    <p className="text-sm text-arttronik-light font-medium mb-3">{member.position}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
