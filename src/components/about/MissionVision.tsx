
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const MissionVision = () => {
  return (
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
  );
};

export default MissionVision;
