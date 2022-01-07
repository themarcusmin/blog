import styles from "./AnimateHome.module.css";

export default function AnimateHome() {
  return (
    <div className={styles.background}>
      <div className={`${styles.line_1} ${styles.anim_typewrite}`}>
        Telling stories. One post at a time.
      </div>
    </div>
  );
}
