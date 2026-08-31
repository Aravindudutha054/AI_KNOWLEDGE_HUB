import styles from "./ChatLayout.module.css";

export default function ChatLayout({ children }) {
  const sections = Array.isArray(children) ? children : [children];
  const [sidebar, main, sources] = sections;

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.main}>{main}</main>
      <aside className={styles.sources}>{sources}</aside>
    </div>
  );
}
