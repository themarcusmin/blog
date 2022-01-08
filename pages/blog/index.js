import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  // sort posts by most recent date
  const postsSortedByDate = posts.sort((a, b) => {
    const beforeDate = new Date(a.frontMatter.date);
    const afterDate = new Date(b.frontMatter.date);
    return afterDate - beforeDate;
  });

  // count tags
  const allTagsRaw = posts.map((post) => post.frontMatter.tags);
  const allTagsConcat = Array.prototype.concat(...allTagsRaw);
  const tags = {};
  for (const tagName of allTagsConcat) {
    tags[tagName] = tags[tagName] ? tags[tagName] + 1 : 1;
  }

  return {
    props: {
      posts: postsSortedByDate,
      tags,
    },
  };
};

import styles from "../../styles/Blog.module.css";
import Link from "next/link";

export default function blogIndex({ posts, tags }) {
  return (
    <>
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
