import styles from "../styles/Hyperlink.module.css";

export default function Hyperlink({ href, text }) {
  return (
    <a
      className={styles.hyperlink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
