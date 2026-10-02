import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const name = localStorage.getItem('ls_name') || 'Learner';
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">
          <div className="card cursor-default">
            <h3 className="text-xl font-bold">{greet}, {name} 👋</h3>
            <p className="text-slate-400">Ready to learn something new today?</p>
          </div>

          <div className="card cursor-default">
            <h3 className="font-bold mb-4">🔥 Continue Learning</h3>
            {[
              { name: 'JavaScript', pct: 68 },
              { name: 'Database Systems', pct: 42 },
              { name: 'Software Engineering', pct: 81 },
            ].map(s => (
              <div key={s.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{s.name}</span>
                  <span className="text-cyan-400">{s.pct}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded overflow-hidden">
                  <div
                    className="h-full rounded bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="card cursor-default">
            <h3 className="font-bold mb-3">🧠 Quick Quiz</h3>
            <p className="text-slate-400 mb-4">5 questions available.</p>
            <Link to="/quiz/demo" className="btn-primary">Start Quiz →</Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card cursor-default">
            <h3 className="font-bold">🔥 Learning Streak</h3>
            <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mt-2">
              12 Days
            </div>
          </div>

          <div className="card cursor-default">
            <h3 className="font-bold mb-3">⭐ Recommended</h3>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>→ Introduction to REST APIs</li>
              <li>→ SQL Joins Deep Dive</li>
              <li>→ Design Patterns in JS</li>
            </ul>
          </div>

          <div className="card cursor-default">
            <h3 className="font-bold mb-3">🏅 Achievements</h3>
            <div className="text-sm space-y-1">
              <p>✅ First Quiz</p>
              <p>✅ 7-Day Learner</p>
              <p className="text-slate-500">🔒 Topic Master</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}