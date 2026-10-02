import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { findTopic } from '../data/seed';

export default function Topic() {
  const { id } = useParams();
  const topic = findTopic(id);

  if (!topic) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-3">Topic not found</h2>
          <p className="text-slate-400 mb-6">The topic you're looking for doesn't exist.</p>
          <Link to="/explore" className="btn-primary">← Back to Explore</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link to="/explore" className="text-cyan-400 text-sm hover:text-cyan-300">← Back to Explore</Link>

        <div className="mt-6 mb-8">
          <div className="text-xs text-slate-500 mb-2">
            {topic.fieldName} · {topic.subject.name} · {topic.level}
          </div>
          <h1 className="text-4xl font-extrabold">{topic.subject.icon} {topic.title}</h1>
          <p className="text-slate-400 mt-2">⏱ {topic.duration}</p>
        </div>

        {/* Placeholder — real content comes in Step B */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <p className="text-2xl mb-3">📚</p>
          <p className="text-slate-300 font-semibold mb-2">Topic page is coming next</p>
          <p className="text-slate-500 text-sm">
            In Step B, this page will show notes, videos, practice exercises, and a quiz for "{topic.title}".
          </p>
        </div>
      </div>
    </div>
  );
}