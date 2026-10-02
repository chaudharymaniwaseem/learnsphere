import Navbar from '../components/Navbar';

export default function Roadmap() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">🗺️ Learning Roadmaps</h2>
        <p className="text-slate-400 mt-2">Step-by-step paths coming soon.</p>
      </div>
    </div>
  );
}