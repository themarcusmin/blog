import { getAllTagsWithCount } from "../../lib/tags";

const getStaticProps = async () => {
  const tags = await getAllTagsWithCount();

  return {
    props: {
      tags,
    },
  };
};

import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Tag.module.css";

function TagIndex({ tags }) {
  return (
    <>
      <Head>
        <title>Tags | themarcusmin</title>
      </Head>
      <h3 className={styles.header}>Tags</h3>
      {Object.entries(tags).map(([tag, count]) => (
        <li key={tag}>
          <Link href={`/tags/${tag}`}>
            <a className={styles.tag}>{`${tag} (${count})`}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export { getStaticProps };
export default TagIndex;
