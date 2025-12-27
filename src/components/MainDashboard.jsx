import { useMemo, useState } from "react";
import styles from "./MainDashboard.module.scss";

export default function MainDashboard({ boards = [], selectedId, onSelect }) {
  const [query, setQuery] = useState("");
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  const selectedBoard = useMemo(
    () => boards.find((b) => b.id === selectedId) || null,
    [boards, selectedId]
  );

  const filteredBoards = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = boards;

    if (showOnlyActive) {
      arr = arr.filter((b) => b.id === selectedId);
    }
    if (!q) return arr;

    return arr.filter((b) => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q));
  }, [boards, query, showOnlyActive, selectedId]);

  return (
    <main className="mt-2">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            ✨ Winx Boards
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Найди доску, нажми Click и активируй свою трансформацию.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-4 rounded-2xl bg-white/85 border border-slate-200 p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex-1">
              <label className="text-xs text-slate-500 uppercase tracking-wide">
                Search boards
              </label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Например: Study, Bloom, Missions..."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex items-center justify-center md:justify-end gap-2">
              <button
                onClick={() => setShowOnlyActive((v) => !v)}
                className="px-3 py-2 rounded-full bg-slate-800 text-white text-xs border border-slate-700
                           hover:border-blue-500 hover:shadow-lg transition"
              >
                {showOnlyActive ? "Show all" : "Only active"}
              </button>

              <button
                onClick={() => onSelect?.(null)}
                className="px-3 py-2 rounded-full bg-white/70 border border-slate-200 text-slate-700 text-xs
                           hover:bg-white transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Selected info */}
        <div className={["mb-4 rounded-2xl border bg-white/85 p-4 sm:p-5 shadow-sm border-slate-200", styles.panelGlow].join(" ")}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Активная трансформация</p>
              <p className="text-slate-800 font-semibold mt-1">
                {selectedBoard ? selectedBoard.title : "Ничего не выбрано"}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {selectedBoard ? selectedBoard.description : "Нажми Click на любой карточке ниже."}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                {selectedBoard ? `Created: ${selectedBoard.createdAt}` : ""}
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-white text-xs border border-slate-700">
                {selectedBoard ? "✨ +10 XP" : "—"}
              </span>
            </div>
          </div>
        </div>

        {/* Cards grid (HW requirements) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBoards.map((board) => {
            const isActive = board.id === selectedId;

            return (
              <div
                key={board.id}
                className={[
                  "bg-slate-800 border rounded-xl p-4 flex flex-col transition",
                  "border-slate-700 hover:border-blue-500 hover:shadow-lg",
                  styles.boardCard,
                  isActive ? styles.activeRing : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-semibold text-lg">{board.title}</h3>
                  <span className="text-xs text-gray-400">#{board.id}</span>
                </div>

                <p className="text-gray-300 text-sm mt-2 flex-1">{board.description}</p>

                <div className="mt-3 text-xs text-gray-400">Created: {board.createdAt}</div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{isActive ? "🪄 Active" : "✨ Ready"}</span>

                  <button
                    onClick={() => onSelect?.(board.id)}
                    className={[
                      "px-3 py-2 rounded-lg text-sm transition",
                      isActive
                        ? "bg-blue-500/20 text-blue-200 border border-blue-400/40"
                        : "bg-slate-700 text-gray-200 hover:bg-slate-600",
                      styles.magicBtn,
                    ].join(" ")}
                  >
                    Click
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-white/85 border border-slate-200 p-4 sm:p-5 shadow-sm text-center">
          <h4 className="text-slate-800 font-semibold">💖 Слова поддержки</h4>
          <p className="text-sm text-slate-600 mt-2">
            Believe in yourself and your magic. Даже если список задач длинный — ты не одна.
          </p>
        </div>
      </div>
    </main>
  );
}
