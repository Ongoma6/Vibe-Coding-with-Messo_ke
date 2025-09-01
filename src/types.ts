export interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

export interface Deck {
  id: string;
  name: string;
  cards: Flashcard[];
}