import TaskList from "./TaskList";

function MainDashboard({ tasks }) {
  const cardStyle = {
    padding: '14px 16px',
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    boxShadow: '0 8px 20px rgba(180, 140, 255, 0.25)',
    border: '1px solid rgba(230, 210, 255, 0.9)',
    marginBottom: '14px',
  };

  return (
    <main style={{ paddingTop: '4px' }}>
      <h2 style={{ margin: 0, fontSize: '20px', color: '#7b44cc' }}>
        Главная панель феи продуктивности ✨
      </h2>

      <p style={{ margin: '6px 0 16px', fontSize: '13px', color: '#9a70d9' }}>
        Здесь ты превращаешь обычные дела в волшебные достижения.
      </p>

      <div style={cardStyle}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#6c3dc6' }}>
          Сегодняшние квесты 🧚‍♀️
        </h3>

        <div style={{ marginTop: 10 }}>
          <TaskList items={tasks} />
        </div>
      </div>

      <div style={cardStyle}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#6c3dc6' }}>
          Магический прогресс 🌈
        </h3>
        <p style={{ margin: '8px 0 0', fontSize: '13px' }}>
          Ты уже ближе к своей цели, чем вчера. Каждая выполненная задача — как новая
          трансформация Winx.
        </p>
      </div>

      <div style={cardStyle}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#6c3dc6' }}>
          Слова поддержки 💖
        </h3>
        <p style={{ margin: '8px 0 0', fontSize: '13px' }}>
          «Believe in yourself and your magic. Даже если список задач длинный — ты не
          одна, твоя сила и дисциплина с тобой.»
        </p>
      </div>
    </main>
  );
}

export default MainDashboard;
