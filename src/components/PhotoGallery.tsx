
import React from 'react';
import { motion } from 'framer-motion';
import { GalleryHorizontal, Heart } from 'lucide-react';

// Sample photo data - replace with your actual photos
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1469571486292-b53601010376',
    alt: 'Couple at sunset',
    caption: 'Beautiful sunset walk'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7',
    alt: 'Picnic in the park',
    caption: 'Our first picnic'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
    alt: 'Coffee date',
    caption: 'Morning coffee dates'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
    alt: 'Holding hands',
    caption: 'Always there for each other'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
    alt: 'Beach day',
    caption: 'Fun day at the beach'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1532779952550-b0f345a58bd8',
    alt: 'Hiking adventure',
    caption: 'Our hiking adventure'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519671482248-7c6a6813fd09',
    alt: 'Movie night',
    caption: 'Cozy movie nights'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672',
    alt: 'Ice cream date',
    caption: 'Sweet treats together'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white/5 to-love-purple-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-12">
          <GalleryHorizontal className="text-love-purple-dark" />
          <motion.h2 
            className="text-4xl font-elegant text-center neon-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Photo Gallery
          </motion.h2>
        </div>

        <motion.p 
          className="text-center max-w-2xl mx-auto mb-12 text-love-purple-dark/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Capturing our most precious moments together. Every smile, every laugh, every adventure.
        </motion.p>
        
        <motion.div 
          className="photo-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="photo-item"
              variants={item}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px rgba(159, 122, 234, 0.4)"
              }}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-love-pink fill-love-pink animate-pulse" />
                    <p className="text-white font-handwriting text-lg">{photo.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
