
import { motion } from 'framer-motion';
import BlurImage from '@/components/ui/BlurImage';

const CompanyOverview = () => {
  return (
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
  );
};

export default CompanyOverview;
