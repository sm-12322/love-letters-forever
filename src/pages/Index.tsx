
import React from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import PhotoGallery from '../components/PhotoGallery';
import RelationshipHistory from '../components/RelationshipHistory';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-love-pink-light opacity-10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-love-purple-light opacity-10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-love-pink-light opacity-10 blur-3xl" />
      </div>
      
      <Header />
      
      <main>
        <Timeline />
        <PhotoGallery />
        <RelationshipHistory />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-love-purple text-white flex items-center justify-center shadow-lg z-50 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(159, 122, 234, 0.6)" 
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
