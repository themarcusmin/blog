import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://github.com/themarcusmin/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built
        </a>
        <div>with</div>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>
      </div>
    </footer>
  );
}
