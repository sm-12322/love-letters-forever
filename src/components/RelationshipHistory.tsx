
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Users } from 'lucide-react';

const RelationshipHistory = () => {
  return (
    <section id="history" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-12">
          <Book className="text-love-purple-dark" />
          <motion.h2 
            className="text-4xl font-elegant text-center neon-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>
        </div>
        
        <motion.div 
          className="history-card mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-love-pink" />
            <h3 className="text-2xl font-handwriting text-love-pink-dark">How We Met</h3>
          </div>
          <p className="text-gray-700 mb-6">
            It was a beautiful spring day when our paths first crossed. Who would have thought that a simple 
            conversation would lead to the most meaningful relationship? From the moment we met, there was an 
            undeniable connection between us. Your smile captivated me, and your laughter became my favorite sound.
          </p>
          <p className="text-gray-700">
            Our first date was at that little café downtown. We talked for hours about our dreams, our fears, and everything 
            in between. Time seemed to stand still when we were together. I knew then that you were someone special, someone 
            I wanted to create countless memories with.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="history-card">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-love-pink fill-love-pink-light" />
              <h3 className="text-xl font-handwriting text-love-pink-dark">What I Love About You</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-love-pink">❤</span>
                <span>Your compassionate heart and how you always think of others</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-pink">❤</span>
                <span>The way your eyes light up when you're excited about something</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-pink">❤</span>
                <span>Your courage to chase your dreams and never give up</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-pink">❤</span>
                <span>How you make even the simplest moments feel magical</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-pink">❤</span>
                <span>The sound of your laughter that makes everything better</span>
              </li>
            </ul>
          </div>

          <div className="history-card">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-love-purple fill-love-purple-light" />
              <h3 className="text-xl font-handwriting text-love-purple-dark">What Binds Us Together</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-love-purple">❤</span>
                <span>Our shared values and dreams for the future</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-purple">❤</span>
                <span>The way we understand each other without words</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-purple">❤</span>
                <span>Our ability to make each other better versions of ourselves</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-purple">❤</span>
                <span>The trust and respect we've built over these two years</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-love-purple">❤</span>
                <span>Our promise to choose each other every day</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="history-card text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            boxShadow: "0 10px 30px rgba(159, 122, 234, 0.4), 0 0 15px rgba(255, 222, 226, 0.6)" 
          }}
        >
          <h3 className="text-2xl font-handwriting text-love-purple-dark mb-4">Our Journey Continues</h3>
          <p className="text-gray-700 mb-4">
            Two years have passed, and my love for you has only grown stronger. Every day with you is a gift, 
            and I cherish each moment we share. Thank you for being my partner, my confidant, and my best friend.
          </p>
          <div className="flex justify-center">
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-full h-full text-love-pink fill-love-pink animate-pulse" />
            </motion.div>
          </div>
          <p className="font-handwriting text-xl text-love-pink-dark mt-2">Happy Birthday, My Love!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default RelationshipHistory;
