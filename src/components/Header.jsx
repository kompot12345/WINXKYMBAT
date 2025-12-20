import { useState } from "react";

export default function Header() {
  const [mode, setMode] = useState(true);

  return (
    <header className="bg-slate-800 px-4 py-3 rounded-xl border border-slate-700 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 flex items-center justify-center shadow">
            ✨
          </div>
          <div className="leading-tight">
            <h1 className="text-white text-xl font-semibold tracking-wide">
              TaskNest <span className="text-gray-300">Winx</span>
            </h1>
            <p className="text-gray-300 text-xs">
              Believe in your magic — and your to-do list
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <nav className="hidden sm:flex items-center gap-1">
            <button className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition">
              Dashboard
            </button>
            <button className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition">
              Boards
            </button>
            <button className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition">
              Profile
            </button>
          </nav>

          <button
            onClick={() => setMode((v) => !v)}
            className="px-3 py-2 rounded-full bg-white/15 border border-white/30 text-white text-xs
                       hover:bg-white/20 hover:border-white/40 transition flex items-center gap-2"
            title="Toggle Winx mode"
          >
            <span aria-hidden>🧚‍♀️</span>
            <span>Winx mode: {mode ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
