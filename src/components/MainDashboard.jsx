import { useMemo, useState } from "react";

export default function MainDashboard({ boards = [] }) {
  const [selectedId, setSelectedId] = useState(null);

  const selectedBoard = useMemo(
    () => boards.find((b) => b.id === selectedId) || null,
    [boards, selectedId]
  );

  return (
    <main className="mt-2">
      {/* Page heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-slate-800">
          🧚‍♀️ Главная панель феи продуктивности
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Выбери доску — и преврати планы в магические достижения.
        </p>
      </div>

      {/* Selected board info (interactable) */}
      <div className="mb-4 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-slate-500">Активная трансформация</p>
            <p className="text-slate-800 font-semibold">
              {selectedBoard ? selectedBoard.title : "Ничего не выбрано"}
            </p>
            <p className="text-sm text-slate-600 mt-1">
              {selectedBoard ? selectedBoard.description : "Нажми “Open” на любой доске ниже."}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden sm:inline">
              Магический прогресс
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-white text-xs border border-slate-700">
              {selectedBoard ? "✨ +10 XP" : "—"}
            </span>
          </div>
        </div>
      </div>

      {/* ✅ REQUIRED: grid + responsive + map + key + bg-slate-800 cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {boards.map((board) => {
          const isActive = board.id === selectedId;

          return (
            <div
              key={board.id}
              className={[
                "bg-slate-800 border rounded-xl p-4 flex flex-col transition",
                "border-slate-700 hover:border-blue-500 hover:shadow-lg",
                isActive ? "ring-2 ring-blue-400" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold text-lg">
                  {board.title}
                </h3>

                <span className="text-xs text-gray-400">
                  #{board.id}
                </span>
              </div>

              <p className="text-gray-300 text-sm mt-2 flex-1">
                {board.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {isActive ? "🪄 Active" : "✨ Ready"}
                </span>

                <button
                  onClick={() => setSelectedId(board.id)}
                  className="px-3 py-2 rounded-lg bg-slate-700 text-gray-200 hover:bg-slate-600 transition"
                >
                  Open
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Winx support block (still Tailwind, looks nice) */}
      <div className="mt-6 rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
        <h4 className="text-slate-800 font-semibold">💖 Слова поддержки</h4>
        <p className="text-sm text-slate-600 mt-1">
          Believe in yourself and your magic. Даже если список задач длинный — ты не одна.
        </p>
      </div>
    </main>
  );
}
