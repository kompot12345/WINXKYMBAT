import styles from "./TaskList.module.css";

export default function TaskList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((task) => (
        <div className={styles.card} key={task.id}>
          <h3 className={styles.title}>{task.title}</h3>
          <p className={styles.meta}>Status: {task.status}</p>
          <p className={styles.meta}>Priority: {task.priority}</p>
        </div>
      ))}
    </div>
  );
}
