import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AskAI() {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!q.trim()) return;
    setLoading(true);
    setAnswer('');

    // Placeholder — will connect to real AI backend later
    setTimeout(() => {
      setAnswer(
        `🤖 (Demo answer for: "${q}")\n\n` +
        `This is a placeholder response. To get real AI answers, we'll connect a backend API in a later step.\n\n` +
        `For now, explore the Dashboard, Quiz, and Roadmaps to see LearnSphere working.`
      );
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">🤖 Ask LearnSphere</h2>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && ask()}
          placeholder="e.g. Explain polymorphism in simple words"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none focus:border-indigo-500 mb-4 text-white"
        />
        <button onClick={ask} disabled={loading} className="btn-primary">
          {loading ? 'Thinking…' : 'Ask →'}
        </button>

        {answer && (
          <div className="card cursor-default mt-6 whitespace-pre-wrap text-slate-300">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}