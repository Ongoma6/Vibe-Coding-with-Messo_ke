import React, { createContext, useContext, useState } from 'react';

type Mood = 'tired' | 'motivated' | 'anxious' | 'neutral';

interface Gamification {
  streak: number;
  points: number;
}

interface AppState {
  mood: Mood;
  setMood: (m: Mood) => void;
  gamification: Gamification;
  incrementStreak: () => void;
  addPoints: (p: number) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be within AppProvider');
  return ctx;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mood, setMood] = useState<Mood>('neutral');
  const [gamification, setGamification] = useState<Gamification>(() => {
    const data = localStorage.getItem('gamification');
    return data ? JSON.parse(data) : { streak: 0, points: 0 };
  });

  const persist = (g: Gamification) => {
    localStorage.setItem('gamification', JSON.stringify(g));
  };

  const incrementStreak = () => {
    setGamification((g) => {
      const updated = { ...g, streak: g.streak + 1 };
      persist(updated);
      return updated;
    });
  };

  const addPoints = (p: number) => {
    setGamification((g) => {
      const updated = { ...g, points: g.points + p };
      persist(updated);
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{ mood, setMood, gamification, incrementStreak, addPoints }}>
      {children}
    </AppContext.Provider>
  );
};