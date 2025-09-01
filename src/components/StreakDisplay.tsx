import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';

const StreakDisplay: React.FC = () => {
  const {
    gamification: { streak, points },
  } = useApp();
  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      🔥 Streak: {streak} • ⭐ Points: {points}
    </motion.div>
  );
};

export default StreakDisplay;