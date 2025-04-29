
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';

// Sample timeline data - replace with real memories
const timelineEvents = [
  {
    date: 'May 2023',
    title: 'Our First Date',
    description: 'Remember that cute café where we couldn\'t stop talking for hours?',
    icon: Heart,
  },
  {
    date: 'July 2023',
    title: 'Beach Vacation',
    description: 'Our first trip together to the coast. Building sandcastles and watching sunsets.',
    icon: Heart,
  },
  {
    date: 'October 2023',
    title: 'Fall Festival',
    description: 'Dancing in the autumn leaves and drinking hot apple cider. Your laugh was magical.',
    icon: Heart,
  },
  {
    date: 'December 2023',
    title: 'Holiday Season',
    description: 'Meeting each other\'s families and creating new traditions together.',
    icon: Heart,
  },
  {
    date: 'February 2024',
    title: 'Valentine\'s Day',
    description: 'Our romantic dinner under the stars. You looked stunning that night.',
    icon: Heart,
  },
  {
    date: 'May 2024',
    title: 'One Year Together',
    description: 'Celebrating our first anniversary with a surprise picnic in the park.',
    icon: Heart,
  },
  {
    date: 'August 2024',
    title: 'Concert Night',
    description: 'Dancing to our favorite songs and singing at the top of our lungs.',
    icon: Heart,
  },
  {
    date: 'December 2024',
    title: 'Winter Cabin Getaway',
    description: 'Cozy fires, board games, and falling even more in love with you.',
    icon: Heart,
  },
  {
    date: 'February 2025',
    title: 'Cooking Class',
    description: 'Making pasta from scratch and flour fights in the kitchen.',
    icon: Heart,
  },
  {
    date: 'May 2025',
    title: 'Almost Two Years',
    description: 'Still falling for you more every day. Happy Birthday, my love!',
    icon: Heart,
  },
];

interface TimelineItemProps {
  event: typeof timelineEvents[0];
  index: number;
}

const TimelineItem = ({ event, index }: TimelineItemProps) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className="flex gap-4 mb-12 relative z-10"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.2
          }
        }
      }}
    >
      <div className="flex-shrink-0 relative">
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-br from-love-pink to-love-purple flex items-center justify-center z-10 relative neon-border"
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 10px rgba(255, 182, 193, 0.8), 0 0 20px rgba(159, 122, 234, 0.5)"
          }}
        >
          <event.icon className="w-4 h-4 text-white" />
        </motion.div>
      </div>
      <motion.div
        className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm p-5 rounded-lg shadow-md flex-1"
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px rgba(159, 122, 234, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-handwriting text-love-purple-dark">{event.title}</h3>
          <span className="text-sm font-medium text-love-pink-dark bg-love-pink-light bg-opacity-50 px-3 py-1 rounded-full">
            {event.date}
          </span>
        </div>
        <p className="text-gray-700">{event.description}</p>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 px-4 md:px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 justify-center mb-12">
          <Clock className="text-love-purple-dark" />
          <h2 className="text-4xl font-elegant text-center neon-text">Our Timeline</h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-connector"></div>
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
