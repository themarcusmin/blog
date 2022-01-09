import { getAllPostsWithFrontMatter } from "../../lib/posts";
import { getAllTagsWithCount } from "../../lib/tags";

const getStaticProps = async () => {
  const posts = await getAllPostsWithFrontMatter();
  const tags = await getAllTagsWithCount();

  return {
    props: {
      posts,
      tags,
    },
  };
};

import styles from "../../styles/Blog.module.css";
import Head from "next/head";
import Link from "next/link";

function BlogIndex({ posts, tags }) {
  return (
    <>
      <Head>
        <title>Blog | themarcusmin</title>
      </Head>
      <h3 className={styles.allPosts}>All Posts</h3>
      {/* All Posts */}
      {posts.map((post) => (
        <li key={post.slug} className={styles.postTitle}>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.frontMatter.title}</a>
          </Link>
        </li>
      ))}
      {/* Tags */}
      <div className={styles.allTags}>
        <div>Browse by tag: </div>
        {Object.entries(tags).map(([tag, count]) => (
          <Link href={`/tags/${tag}`} key={tag}>
            <a>{`${tag} (${count})`}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

export { getStaticProps };
export default BlogIndex;
