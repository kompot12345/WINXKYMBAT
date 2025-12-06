function Header() {
  return (
    <header
      style={{
        padding: '16px 24px',
        borderRadius: '18px',
        background:
          'linear-gradient(120deg, rgba(255, 153, 230, 0.95), rgba(153, 102, 255, 0.95))',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 12px 25px rgba(120, 70, 200, 0.35)',
        marginBottom: '16px',
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: '26px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          TaskNest ✨
        </h1>
        <p
          style={{
            margin: '6px 0 0',
            fontSize: '14px',
            opacity: 0.95,
          }}
        >
          Believe in your magic — and your to-do list 💫
        </p>
      </div>

      <div
        style={{
          padding: '8px 14px',
          borderRadius: '999px',
          backgroundColor: 'rgba(255, 255, 255, 0.18)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span role="img" aria-label="fairy">
          🧚‍♀️
        </span>
        <span>Winx mode: ON</span>
      </div>
    </header>
  );
}

export default Header;


