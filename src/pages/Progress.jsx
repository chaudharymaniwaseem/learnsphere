import Navbar from '../components/Navbar';

export default function Progress() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">📊 My Progress</h2>
        <p className="text-slate-400 mt-2">Stats, streaks, and graphs coming soon.</p>
      </div>
    </div>
  );
}