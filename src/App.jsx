import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";
import UserForm from "./components/UserForm"; // optional, keep if you want

function App() {
  // ✅ REQUIRED BY HW: boards state in App.jsx
  const [boards] = useState([
    { id: 1, title: "💖 Мой проект", description: "Описание проекта" },
    { id: 2, title: "📚 Учёба", description: "Домашние задания" },
    { id: 3, title: "🧚‍♀️ Алфея", description: "Прокачка магии и дисциплины" },
    { id: 4, title: "✨ Enchantix", description: "Планы и цели на неделю" },
    { id: 5, title: "🌙 Bloom Mode", description: "Фокус и спокойная продуктивность" },
    { id: 6, title: "🌈 Rainbow Missions", description: "Квесты, которые дают +XP" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-amber-50">
      <div className="min-h-screen flex">
        <Sidebar />

        <div className="flex-1 p-4 md:p-6 space-y-6">
          <Header />

          {/* ✅ Tailwind boards cards */}
          <MainDashboard boards={boards} />

          {/* Optional: keep previous feature, doesn't break HW */}
          <div className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
