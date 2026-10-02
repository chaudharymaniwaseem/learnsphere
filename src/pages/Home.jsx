import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="text-center py-24 px-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-sm mb-6">
          ✨ One Platform. One Learning Journey.
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Everything You Need to Learn.
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            In One Place.
          </span>
        </h1>
        <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
          Notes. Videos. Practice. Quizzes. Roadmaps — all organized around what you want to learn.
        </p>

        <div className="flex gap-4 justify-center mt-10 flex-wrap">
          <Link to="/role" className="btn-primary">Start Learning →</Link>
          <Link to="/explore" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-indigo-400 text-white transition">
            Explore Subjects
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-10">🎯 Choose Your Learning Path</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: '🎓', label: 'University' },
            { icon: '🏫', label: 'College' },
            { icon: '📚', label: 'School' },
            { icon: '💼', label: 'Professional' },
            { icon: '🌱', label: 'Independent' },
          ].map(r => (
            <Link to="/role" key={r.label} className="card text-center">
              <div className="text-3xl mb-2">{r.icon}</div>
              <div className="text-sm font-semibold">{r.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Stop searching everywhere.</h2>
        <p className="text-slate-400 mb-8">Start learning in one place.</p>
        <Link to="/dashboard" className="btn-primary">Go to Dashboard →</Link>
      </section>
    </div>
  );
}