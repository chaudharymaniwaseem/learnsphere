import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="card cursor-default">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3 outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 mb-4 outline-none focus:border-indigo-500"
          />
          <Link to="/dashboard" className="btn-primary block text-center">Login →</Link>
          <p className="text-slate-400 text-sm mt-4 text-center">
            No account? <Link to="/signup" className="text-cyan-400">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}