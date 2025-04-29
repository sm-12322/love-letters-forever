
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Heart className="mx-auto h-8 w-8 text-love-pink fill-love-pink neon-heart" />
        </motion.div>
        
        <motion.p 
          className="mt-4 font-handwriting text-xl text-love-purple-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Forever & Always
        </motion.p>
        
        <motion.p 
          className="text-sm text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Made with love for your birthday • {currentYear}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
