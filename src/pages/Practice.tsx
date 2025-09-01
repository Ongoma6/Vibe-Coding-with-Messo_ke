import { useParams } from 'react-router-dom';
import { sampleDecks } from '../data/sampleDecks';
import { useState } from 'react';
import { Encouragement } from '../components/Encouragement';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Practice: React.FC = () => {
  const { deckId } = useParams();
  const deck = sampleDecks.find((d) => d.id === deckId);
  const { incrementStreak, addPoints } = useApp();

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!deck) return <p>Deck not found.</p>;

  const card = deck.cards[index];

  const handleNext = () => {
    setShowAnswer(false);
    if (index < deck.cards.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    incrementStreak();
    addPoints(10);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{deck.name}</h2>
      <Encouragement />
      <motion.div
        key={card.id}
        className="border rounded p-6 text-center bg-white shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xl font-medium mb-4">{card.question}</p>
        {showAnswer && <p className="text-lg text-green-600">{card.answer}</p>}
      </motion.div>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
      >
        {showAnswer ? 'Hide' : 'Show'} Answer
      </button>
      <button
        onClick={handleNext}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Next Card
      </button>
    </div>
  );
};

export default Practice;