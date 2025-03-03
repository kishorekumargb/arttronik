
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-arttronik-primary to-arttronik-deep text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Arttronik Meditech</h3>
            <p className="mb-4 text-sm text-blue-100">
              Providing cutting-edge medical equipment for critical care and diagnostics to healthcare facilities worldwide.
            </p>
            <p className="text-sm text-blue-100">
              GSTIN: 33CNCPA5332A1ZY
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-100 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No.31, Gopal Street Ext, Nalli Kondan Nagar, Tindivanam, Tamil Nadu - 604001</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-200" />
                <a href="mailto:info@arttronik.com" className="text-blue-100 hover:text-white transition-colors">
                  info@arttronik.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-200" />
                <a href="tel:+917299775599" className="text-blue-100 hover:text-white transition-colors">
                  +91-7299775599
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-200" />
                <a href="tel:+917418884004" className="text-blue-100 hover:text-white transition-colors">
                  +91-7418884004
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Website</h3>
            <div className="flex items-center">
              <ExternalLink className="mr-2 h-5 w-5 text-blue-200" />
              <a 
                href="https://www.arttronik.com"
                className="text-blue-100 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.arttronik.com
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Arttronik Meditech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
