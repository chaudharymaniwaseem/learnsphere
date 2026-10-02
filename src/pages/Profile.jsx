import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Profile() {
  const [name, setName] = useState(localStorage.getItem('ls_name') || '');
  const role = localStorage.getItem('ls_role') || 'Not set';
  const field = localStorage.getItem('ls_field') || 'Not set';

  const save = () => {
    localStorage.setItem('ls_name', name);
    alert('Saved! ✅');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="card cursor-default">
          <h2 className="text-2xl font-bold mb-6">👤 Your Profile</h2>

          <label className="block text-sm text-slate-400 mb-1">Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 mb-4 outline-none focus:border-indigo-500"
          />

          <label className="block text-sm text-slate-400 mb-1">Learner Type</label>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 mb-4 capitalize">
            {role}
          </div>

          <label className="block text-sm text-slate-400 mb-1">Field</label>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 mb-6 uppercase">
            {field}
          </div>

          <button onClick={save} className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}