import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import UserForm from "./components/UserForm";
import Boards from "./components/Boards";

import { tasks } from "./tasks";

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(135deg, #ffe6ff, #d9c7ff, #fffbf2)',
        fontFamily:
          '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* 🌸 Sidebar */}
      <Sidebar />

      {/* 🌈 Main content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          boxSizing: 'border-box',
          gap: '24px',
        }}
      >
        {/* ✨ Header */}
        <Header />

        {/* 🧚‍♀️ Dashboard with Winx quests */}
        <MainDashboard tasks={tasks} />

        {/* 💖 HW: UserForm (Winx Fairy Profile) */}
        <div
          style={{
            padding: '16px',
            borderRadius: '18px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 26px rgba(180, 140, 255, 0.25)',
            border: '1px solid rgba(230, 210, 255, 0.9)',
          }}
        >
          <UserForm />
        </div>

        {/* ✨ HW: Mock Boards (Winx Style) */}
        <div
          style={{
            padding: '16px',
            borderRadius: '18px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 26px rgba(180, 140, 255, 0.25)',
            border: '1px solid rgba(230, 210, 255, 0.9)',
          }}
        >
          <Boards />
        </div>
      </div>
    </div>
  );
}

export default App;
