import { useMemo, useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";
import UserForm from "./components/UserForm";

function App() {
  // tabs/screens
  const [activeTab, setActiveTab] = useState("boards"); // dashboard | boards | profile

  // boards state (HW requirement)
  const [boards] = useState([
    { id: 1, title: "💖 Bloom — My Project", description: "Главный проект и большие цели", createdAt: "2025-03-15" },
    { id: 2, title: "📚 Stella — Study Spark", description: "Учёба, конспекты и дедлайны", createdAt: "2025-03-16" },
    { id: 3, title: "🧚‍♀️ Flora — Healthy Routine", description: "Сон, спорт, здоровье, баланс", createdAt: "2025-03-17" },
    { id: 4, title: "✨ Musa — Focus Flow", description: "Фокус-сессии и deep work", createdAt: "2025-03-18" },
    { id: 5, title: "🌙 Tecna — Smart Plan", description: "Планы на неделю, расписание и трекинг", createdAt: "2025-03-19" },
    { id: 6, title: "🌈 Aisha — Rainbow Missions", description: "Квесты, которые дают +XP", createdAt: "2025-03-20" },
  ]);

  // global selected board (so Dashboard can show it too)
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  const selectedBoard = useMemo(
    () => boards.find((b) => b.id === selectedBoardId) || null,
    [boards, selectedBoardId]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-amber-50">
      <div className="min-h-screen flex">
        <Sidebar />

        {/* centered main */}
        <div className="flex-1 flex justify-center p-4 md:p-6">
          <div className="w-full max-w-5xl space-y-6">
            <Header activeTab={activeTab} onTabChange={setActiveTab} />

            {/* DASHBOARD */}
            {activeTab === "dashboard" && (
              <section className="rounded-2xl bg-white/85 border border-white/70 shadow-lg p-5 md:p-6 space-y-5">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                    🧚‍♀️ Winx Dashboard
                  </h2>
                  <p className="text-sm text-slate-600 mt-2">
                    Выбирай доски, выполняй миссии и прокачивай свою магию продуктивности.
                  </p>
                </div>

                {/* Active transformation preview */}
                <div className="rounded-2xl bg-white/90 border border-slate-200 p-4 sm:p-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="text-center md:text-left">
                      <p className="text-xs text-slate-500 uppercase tracking-wide">
                        Активная трансформация
                      </p>
                      <p className="text-slate-800 font-semibold mt-1">
                        {selectedBoard ? selectedBoard.title : "Ничего не выбрано"}
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        {selectedBoard
                          ? selectedBoard.description
                          : "Перейди на вкладку Boards и нажми Click на любой карточке."}
                      </p>
                    </div>

                    <div className="flex items-center justify-center md:justify-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-white text-xs border border-slate-700">
                        {selectedBoard ? "✨ +10 XP" : "—"}
                      </span>
                      <button
                        onClick={() => setActiveTab("boards")}
                        className="px-3 py-2 rounded-full bg-slate-800 text-white text-xs border border-slate-700
                                   hover:border-blue-500 hover:shadow-lg transition"
                      >
                        Go to Boards
                      </button>
                    </div>
                  </div>
                </div>

                {/* Winx missions cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "✨ Focus Spell", text: "25 минут фокуса — 1 миссия выполнена." },
                    { title: "🌙 Calm Routine", text: "5 минут спокойствия, чтобы сохранить силу." },
                    { title: "🌈 Rainbow Streak", text: "3 маленьких дела подряд — +XP." },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col
                                 hover:border-blue-500 hover:shadow-lg transition"
                    >
                      <div className="text-white font-semibold">{card.title}</div>
                      <div className="text-gray-300 text-sm mt-2 flex-1">{card.text}</div>
                      <button className="mt-4 px-3 py-2 rounded-lg bg-slate-700 text-gray-200 hover:bg-slate-600 transition text-sm">
                        Click
                      </button>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-white/90 border border-slate-200 p-4 text-center">
                  <p className="text-sm text-slate-700">
                    “Believe in yourself. Каждая задача — это шаг к новой трансформации.”
                  </p>
                </div>
              </section>
            )}

            {/* BOARDS */}
            {activeTab === "boards" && (
              <MainDashboard
                boards={boards}
                selectedId={selectedBoardId}
                onSelect={setSelectedBoardId}
              />
            )}

            {/* PROFILE */}
            {activeTab === "profile" && (
              <section className="rounded-2xl bg-white/85 border border-white/70 shadow-lg p-5 md:p-6 space-y-5">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                    💖 Fairy Profile
                  </h2>
                  <p className="text-sm text-slate-600 mt-2">
                    Заполни форму и сразу увидишь данные на странице.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white hover:border-blue-500 hover:shadow-lg transition">
                    <div className="font-semibold">Твоя магия</div>
                    <div className="text-gray-300 text-sm mt-1">
                      Свет • Мотивация • Дисциплина
                    </div>
                  </div>

                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white hover:border-blue-500 hover:shadow-lg transition">
                    <div className="font-semibold">Твоя цель недели</div>
                    <div className="text-gray-300 text-sm mt-1">
                      3 активные доски + 5 мини-миссий
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-sm">
                  <UserForm />
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
