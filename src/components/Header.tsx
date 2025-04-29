
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header = () => {
  // Calculate days until birthday (May 31, 2025)
  const today = new Date();
  const birthday = new Date(2025, 4, 31); // Month is 0-indexed (4 = May)
  const diffTime = Math.abs(birthday.getTime() - today.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <motion.header 
      className="py-16 text-center px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-love-pink-light opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-love-purple-light opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl mb-4 font-elegant text-love-purple-dark">Happy Birthday</h1>
        <motion.div 
          className="flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="text-love-pink-dark fill-love-pink h-6 w-6 neon-heart animate-heartbeat" />
          <h2 className="text-3xl md:text-4xl font-handwriting text-love-pink-dark">
            To My Love
          </h2>
          <Heart className="text-love-pink-dark fill-love-pink h-6 w-6 neon-heart animate-heartbeat" />
        </motion.div>

        <motion.p 
          className="mt-8 text-xl text-love-purple-dark font-medium max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {diffDays} days until your special day on May 31, 2025
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="#timeline"
            className="px-6 py-3 bg-love-pink bg-opacity-90 text-white rounded-full font-medium shadow-md"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 182, 193, 0.8)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Our Timeline
          </motion.a>
          <motion.a 
            href="#gallery" 
            className="px-6 py-3 bg-love-purple bg-opacity-90 text-white rounded-full font-medium shadow-md"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(159, 122, 234, 0.8)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Photo Gallery
          </motion.a>
          <motion.a 
            href="#history" 
            className="px-6 py-3 bg-gradient-to-r from-love-pink to-love-purple text-white rounded-full font-medium shadow-md"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(200, 150, 220, 0.8)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Our Story
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
