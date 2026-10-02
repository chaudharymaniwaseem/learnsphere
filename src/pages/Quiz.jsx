import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const questions = [
  {
    q: 'Which keyword declares a constant in JavaScript?',
    options: ['var', 'let', 'const', 'static'],
    answer: 2,
    explain: '`const` declares a block-scoped constant that cannot be reassigned.',
  },
  {
    q: 'typeof "hello" returns?',
    options: ['string', 'text', 'char', 'object'],
    answer: 0,
    explain: 'Strings return "string" from typeof.',
  },
  {
    q: 'Which method adds to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 0,
    explain: 'push() appends to the end.',
  },
  {
    q: 'What does === check?',
    options: ['Value only', 'Type only', 'Value and type', 'Reference'],
    answer: 2,
    explain: '=== is strict equality — checks value AND type.',
  },
  {
    q: 'Which is NOT a primitive type?',
    options: ['number', 'string', 'object', 'boolean'],
    answer: 2,
    explain: 'Objects are reference types, not primitives.',
  },
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const nav = useNavigate();
  const q = questions[i];

  const submit = (idx) => {
    if (chosen !== null) return;
    setChosen(idx);
    if (idx === q.answer) setScore(s => s + 1);
  };

  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setChosen(null);
    } else {
      nav('/quiz/demo/result', { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="card cursor-default">
          <h2 className="text-2xl font-bold mb-1">
            🧠 Question {i + 1}/{questions.length}
          </h2>
          <p className="text-slate-400 mb-6">JavaScript Basics</p>
          <p className="text-lg mb-6">{q.q}</p>

          <div className="space-y-3">
            {q.options.map((o, idx) => {
              let cls = 'border-slate-800 bg-slate-950 hover:border-indigo-500';
              if (chosen !== null) {
                if (idx === q.answer) cls = 'border-green-500 bg-green-950/40';
                else if (idx === chosen) cls = 'border-red-500 bg-red-950/40';
                else cls = 'border-slate-800 bg-slate-950 opacity-60';
              }
              return (
                <div
                  key={idx}
                  onClick={() => submit(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition ${cls}`}
                >
                  {String.fromCharCode(65 + idx)}. {o}
                </div>
              );
            })}
          </div>

          {chosen !== null && (
            <div className="mt-5 p-4 border-l-2 border-cyan-400 bg-slate-950 rounded">
              <b>{chosen === q.answer ? '✅ Correct!' : '❌ Not quite.'}</b> {q.explain}
            </div>
          )}

          {chosen !== null && (
            <button onClick={next} className="btn-primary mt-6">
              {i + 1 < questions.length ? 'Next →' : 'See Result →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}