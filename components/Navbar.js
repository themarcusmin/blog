import styles from "./Navbar.module.css";
import Link from "next/Link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    if (document.body.dataset.theme === "dark") {
      setTheme("light");
      return delete document.body.dataset.theme;
    }
    setTheme("dark");
    return (document.body.dataset.theme = "dark");
  };

  useEffect(() => {
    function loadTheme() {
      const themeState = localStorage.getItem("theme_state");
      if (themeState === "dark") document.body.dataset.theme = "dark";
      return themeState || "light";
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem("theme_state", theme);
  }, [theme]);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>themarcusmin</a>
      </Link>
      <div>
        <Link href="/blog">
          <a className={styles.animate_uline}>Blog</a>
        </Link>
        <Link href="/about">
          <a className={styles.animate_uline}>About</a>
        </Link>
        <button aria-label="toggle dark mode" onClick={handleThemeToggle}>
          {theme === "light" ? (
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className={styles.svg_sun}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
