import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export const Encouragement: React.FC = () => {
  const { mood } = useApp();
  const quoteByMood: Record<string, string[]> = {
    tired: [
      'Even stars need darkness to shine. Keep glowing.',
      'Rest if you must, but don’t quit.',
    ],
    motivated: [
      'Your spark lights the sky. Blaze on!',
      'Momentum is your melody—dance with it.',
    ],
    anxious: [
      'Breathe—each inhale carves clarity.',
      'Storms pass; your calm remains.',
    ],
    neutral: [
      'Small steps craft great journeys.',
      'Learning is the heart’s quiet song.',
    ],
  };

  const messages = quoteByMood[mood] || quoteByMood.neutral;
  const message = messages[Math.floor(Math.random() * messages.length)];

  return (
    <motion.p
      className="text-center italic text-lg text-indigo-600 mb-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      key={message}
    >
      {message}
    </motion.p>
  );
};