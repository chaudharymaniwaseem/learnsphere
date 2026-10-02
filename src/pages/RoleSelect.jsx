import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const roles = [
  { id: 'university', icon: '🎓', title: 'University Student', desc: 'Degree, semester, subjects' },
  { id: 'college', icon: '🏫', title: 'College Student', desc: 'Program, year, subjects' },
  { id: 'school', icon: '📚', title: 'School Student', desc: 'Grade & subjects' },
  { id: 'professional', icon: '💼', title: 'Professional', desc: 'Skills & goals' },
  { id: 'independent', icon: '🌱', title: 'Independent Learner', desc: 'Learning for myself' },
];

export default function RoleSelect() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">👤 What type of learner are you?</h2>
        <p className="text-slate-400 mb-10">We'll personalize everything around you.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {roles.map(r => (
            <div key={r.id} className="card" onClick={() => {
              localStorage.setItem('ls_role', r.id);
              nav('/field');
            }}>
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-semibold text-lg">{r.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}