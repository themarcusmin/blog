import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/themarcusmin/blog">Built</a>
        <div>with</div>
        <a href="https://vercel.com/">Vercel</a>
      </div>
    </footer>
  );
}
