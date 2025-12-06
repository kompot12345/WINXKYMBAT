function Sidebar() {
  const menuItemStyle = {
    padding: '8px 10px',
    borderRadius: '10px',
    marginBottom: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <aside
      style={{
        width: '230px',
        padding: '18px 16px',
        borderRight: '1px solid rgba(230, 210, 255, 0.9)',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 230, 255, 0.85))',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }}
    >
      <div>
        <h2
          style={{
            fontSize: '18px',
            margin: 0,
            color: '#804acb',
          }}
        >
          Winx Menu
        </h2>
        <p
          style={{
            margin: '4px 0 0',
            fontSize: '12px',
            color: '#9a70d9',
          }}
        >
          Choose your next transformation 🌟
        </p>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li
          style={{
            ...menuItemStyle,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(180, 140, 255, 0.35)',
            border: '1px solid rgba(191, 148, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>📋</span>
          <span>Все задания</span>
        </li>
        <li
          style={{
            ...menuItemStyle,
            backgroundColor: 'rgba(255, 245, 255, 0.9)',
          }}
        >
          💖 Магический фокус
        </li>
        <li
          style={{
            ...menuItemStyle,
            backgroundColor: 'rgba(240, 255, 252, 0.9)',
          }}
        >
          🌈 Завершённые миссии
        </li>
        <li
          style={{
            ...menuItemStyle,
            backgroundColor: 'rgba(255, 250, 235, 0.9)',
          }}
        >
          ⚙️ Настройки уверенности
        </li>
      </ul>

      <div
        style={{
          marginTop: 'auto',
          padding: '10px 12px',
          borderRadius: '14px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px dashed rgba(190, 150, 255, 0.7)',
          fontSize: '12px',
          color: '#8b5fd5',
        }}
      >
        🌟
        <strong> Winx reminder:</strong>  
        even tiny steps are still magic.
      </div>
    </aside>
  );
}

export default Sidebar;

