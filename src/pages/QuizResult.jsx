import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function QuizResult() {
  const { state } = useLocation();
  const score = state?.score ?? 0;
  const total = state?.total ?? 1;
  const pct = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <div className="card cursor-default">
          <h2 className="text-2xl font-bold mb-4">Your Result</h2>
          <div className="text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {score}/{total}
          </div>
          <p className="text-slate-400 mt-2">{pct}%</p>
          <p className="mt-4 text-2xl">{'⭐'.repeat(Math.round(pct / 20))}</p>
          <Link to="/dashboard" className="btn-primary inline-block mt-8">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}