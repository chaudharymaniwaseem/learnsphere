import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import RoleSelect from './pages/RoleSelect';
import FieldSelect from './pages/FieldSelect';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Topic from './pages/Topic';
import Quiz from './pages/Quiz';
import QuizResult from './pages/QuizResult';
import Roadmap from './pages/Roadmap';
import Progress from './pages/Progress';
import Library from './pages/Library';
import AskAI from './pages/AskAI';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/role" element={<RoleSelect />} />
      <Route path="/field" element={<FieldSelect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/topic/:id" element={<Topic />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/quiz/:id/result" element={<QuizResult />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/library" element={<Library />} />
      <Route path="/ask" element={<AskAI />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}