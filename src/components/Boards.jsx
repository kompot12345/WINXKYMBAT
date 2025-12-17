import { useState } from "react";
import styles from "./Boards.module.css";

function Boards() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "🧚‍♀️ Школа Алфеи",
      description: "Учебные задания и магические конспекты",
      createdAt: "2025-03-15",
    },
    {
      id: 2,
      title: "✨ Проект Enchantix",
      description: "Идеи для прокачки сил и личного роста",
      createdAt: "2025-03-16",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // ADD BOARD (no mutation)
  const addBoard = () => {
    if (!title || !description) return;

    const newBoard = {
      id: Date.now(),
      title: `🌸 ${title}`,
      description,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setBoards([...boards, newBoard]);
    setTitle("");
    setDescription("");
  };

  // DELETE BOARD (filter)
  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>✨ Магические доски феи</h2>
      <p className={styles.subtitle}>
        Каждая доска — это новая глава твоего Winx-пути
      </p>

      {/* Add board */}
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Название магической доски"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.textarea}
          placeholder="Описание магии и целей"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className={styles.addBtn} onClick={addBoard}>
          ✨ Добавить доску
        </button>
      </div>

      {/* Boards list */}
      <div className={styles.list}>
        {boards.map((board) => (
          <div key={board.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{board.title}</h3>
            <p className={styles.cardDesc}>{board.description}</p>
            <span className={styles.date}>
              📅 Создано: {board.createdAt}
            </span>

            <button
              className={styles.deleteBtn}
              onClick={() => deleteBoard(board.id)}
            >
              🗑 Удалить
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Boards;
