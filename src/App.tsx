import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Practice from './pages/Practice';
import StreakDisplay from './components/StreakDisplay';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <header className="p-4 bg-indigo-600 text-white flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">
            Study Buddy 📚
          </Link>
          <nav>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </nav>
        </header>
        <main className="p-4 max-w-xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice/:deckId" element={<Practice />} />
          </Routes>
        </main>
      </BrowserRouter>
      <StreakDisplay />
    </AppProvider>
  );
};

export default App;