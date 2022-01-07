import styles from "../styles/Home.module.css";
import AnimateHome from "../components/AnimateHome";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AnimateHome />
      </main>
    </div>
  );
}
