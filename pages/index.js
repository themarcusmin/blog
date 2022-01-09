import Head from "next/head";
import styles from "../styles/Home.module.css";
import AnimateHome from "../components/AnimateHome";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>themarcusmin</title>
      </Head>
      <AnimateHome />
    </main>
  );
}
