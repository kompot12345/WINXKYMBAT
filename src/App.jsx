import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import UserForm from "./components/UserForm";

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
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          boxSizing: 'border-box',
        }}
      >
        <Header />

        {/* Dashboard with props */}
        <MainDashboard tasks={tasks} />

        {/* ===== HW: useState + Form ===== */}
        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 8px 20px rgba(180, 140, 255, 0.25)',
          }}
        >
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
