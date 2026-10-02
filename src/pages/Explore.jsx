import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FIELDS, CONTENT } from '../data/seed';

export default function Explore() {
  const [query, setQuery] = useState('');
  const [activeField, setActiveField] = useState('all');
  const [openSubject, setOpenSubject] = useState(null);

  // Build the visible list of subjects based on filter + search
  const visibleSubjects = [];
  Object.entries(CONTENT).forEach(([fieldId, field]) => {
    if (activeField !== 'all' && activeField !== fieldId) return;

    (field.subjects || []).forEach(subj => {
      const matchesSearch =
        !query ||
        subj.name.toLowerCase().includes(query.toLowerCase()) ||
        (subj.desc || '').toLowerCase().includes(query.toLowerCase()) ||
        subj.topics.some(t => t.title.toLowerCase().includes(query.toLowerCase()));

      if (matchesSearch) {
        visibleSubjects.push({ ...subj, fieldId, fieldName: field.name });
      }
    });
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2">🔎 Explore Subjects</h1>
          <p className="text-slate-400">Search, filter, and find what you want to learn.</p>
        </div>

        {/* Search bar */}
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search subjects or topics… e.g. JavaScript, SQL, Anatomy"
          className="w-full p-4 mb-6 rounded-xl bg-slate-900 border border-slate-800 outline-none focus:border-indigo-500 text-white"
        />

        {/* Field filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveField('all')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              activeField === 'all'
                ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500'
            }`}
          >
            All Fields
          </button>
          {FIELDS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveField(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                activeField === f.id
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500'
              }`}
            >
              {f.icon} {f.name}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-slate-500 text-sm mb-4">
          {visibleSubjects.length} subject{visibleSubjects.length !== 1 ? 's' : ''} found
        </p>

        {/* Subject cards */}
        {visibleSubjects.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-4xl mb-3">🔍</p>
            <p>No subjects match your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleSubjects.map(subj => {
              const isOpen = openSubject === subj.id;
              return (
                <div key={subj.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition">
                  <div className="text-3xl mb-3">{subj.icon}</div>
                  <h3 className="font-bold text-lg">{subj.name}</h3>
                  <p className="text-slate-400 text-sm mt-1 mb-4">{subj.desc}</p>
                  <p className="text-slate-500 text-xs mb-4">
                    {subj.fieldName} · {subj.topics.length} topics
                  </p>

                  <button
                    onClick={() => setOpenSubject(isOpen ? null : subj.id)}
                    className="text-cyan-400 text-sm font-semibold hover:text-cyan-300"
                  >
                    {isOpen ? '▼ Hide topics' : '▶ Show topics'}
                  </button>

                  {isOpen && (
                    <div className="mt-4 space-y-2 border-t border-slate-800 pt-4">
                      {subj.topics.map(t => (
                        <Link
                          key={t.id}
                          to={`/topic/${t.id}`}
                          className="block p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 transition"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{t.title}</span>
                            <span className="text-xs text-slate-500">{t.duration}</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{t.level}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}