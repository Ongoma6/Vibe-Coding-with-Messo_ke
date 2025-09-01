import { Link } from 'react-router-dom';
import { sampleDecks } from '../data/sampleDecks';
import { useApp } from '../context/AppContext';

const Home: React.FC = () => {
  const { mood, setMood } = useApp();
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-2">Your Mood</h2>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="neutral">Neutral</option>
          <option value="tired">Tired</option>
          <option value="motivated">Motivated</option>
          <option value="anxious">Anxious</option>
        </select>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Decks</h2>
        <ul className="space-y-3">
          {sampleDecks.map((d) => (
            <li key={d.id} className="border rounded p-3 flex justify-between items-center">
              <div>
                <h3 className="font-medium">{d.name}</h3>
                <p className="text-sm text-gray-500">{d.cards.length} cards</p>
              </div>
              <Link
                to={`/practice/${d.id}`}
                className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
              >
                Practice
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;