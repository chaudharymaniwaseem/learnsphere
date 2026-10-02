import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [name, setName] = useState('');
  const nav = useNavigate();

  const submit = () => {
    localStorage.setItem('ls_name', name || 'Learner');
    nav('/dashboard');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="card cursor-default">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3 outline-none focus:border-indigo-500"
          />
          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3 outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 mb-4 outline-none focus:border-indigo-500"
          />
          <button onClick={submit} className="btn-primary w-full">
            Create Account →
          </button>
          <p className="text-slate-400 text-sm mt-4 text-center">
            Already have one? <Link to="/login" className="text-cyan-400">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}