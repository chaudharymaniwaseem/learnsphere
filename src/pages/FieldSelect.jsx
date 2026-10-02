import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const fields = [
  { id: 'se', icon: '💻', name: 'Software Engineering', desc: 'Programming, web, systems' },
  { id: 'cs', icon: '🧮', name: 'Computer Science', desc: 'Algorithms, AI, data' },
  { id: 'medical', icon: '🩺', name: 'Medical & Health', desc: 'MBBS, DPT, MLT, Nursing' },
  { id: 'business', icon: '📈', name: 'Business', desc: 'BBA, Marketing, Finance' },
  { id: 'engineering', icon: '⚙️', name: 'Engineering', desc: 'Electrical, Mechanical, Civil' },
  { id: 'languages', icon: '🗣️', name: 'Languages', desc: 'English, Arabic, Spanish' },
];

export default function FieldSelect() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">🎯 Select your field</h2>
        <p className="text-slate-400 mb-10">You can change this later.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {fields.map(f => (
            <div key={f.id} className="card" onClick={() => {
              localStorage.setItem('ls_field', f.id);
              nav('/dashboard');
            }}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}