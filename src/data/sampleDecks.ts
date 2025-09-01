import { Deck } from '../types';

export const sampleDecks: Deck[] = [
  {
    id: 'math-basic',
    name: 'Math Basics',
    cards: [
      { id: 1, question: '2 + 2', answer: '4' },
      { id: 2, question: '5 × 3', answer: '15' },
      { id: 3, question: 'Square root of 9', answer: '3' },
    ],
  },
  {
    id: 'poetry-lines',
    name: 'Famous Poetry',
    cards: [
      { id: 1, question: 'Complete the line: "Shall I compare thee to a…"', answer: 'summer’s day?' },
      { id: 2, question: 'Poet of "The Road Not Taken"', answer: 'Robert Frost' },
      { id: 3, question: 'Haiku syllable pattern', answer: '5-7-5' },
    ],
  },
];