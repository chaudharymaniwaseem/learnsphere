import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <Link to="/" className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        🌐 LearnSphere
      </Link>
      <div className="flex gap-6 text-slate-400 text-sm">
        <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
        <Link to="/explore" className="hover:text-white transition">Explore</Link>
        <Link to="/roadmap" className="hover:text-white transition">Roadmaps</Link>
        <Link to="/ask" className="hover:text-white transition">Ask AI</Link>
        <Link to="/profile" className="hover:text-white transition">Profile</Link>
      </div>
    </nav>
  );
}