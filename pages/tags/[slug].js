import { getAllPostsWithFrontMatter } from "../../lib/posts";
import { getAllTags } from "../../lib/tags";

const getStaticProps = async ({ params: { slug } }) => {
  const posts = await getAllPostsWithFrontMatter(slug);

  return {
    props: { posts, slug },
  };
};

const getStaticPaths = async () => {
  const tags = await getAllTags();

  const paths = tags.map((slug) => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: false };
};

import Link from "next/link";
import styles from "../../styles/Tag.module.css";

const TagPage = ({ posts, slug }) => {
  console.log({ posts });
  return (
    <>
      <h3>{`${posts.length} post${
        posts.length > 1 ? "s" : ""
      } tagged with "${slug}"`}</h3>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a className={`${styles.tag} ${styles.underline}`}>
              {post.frontMatter.title}
            </a>
          </Link>
        </li>
      ))}
      <Link href="/tags">
        <a className={styles.browseAllTags}>Browse all tags</a>
      </Link>
    </>
  );
};

export { getStaticPaths, getStaticProps };
export default TagPage;
