import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

// import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";

function dateFormatter(dateString) {
  return new Date(dateString).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const PostPage = ({ frontMatter: { title, date, tags }, mdxSource }) => {
  return (
    <>
      <h2 className={styles.blogTitle}>{title}</h2>
      <span className={styles.date}>{`Posted ${dateFormatter(date)}`}</span>
      <MDXRemote {...mdxSource} />
      <i className={styles.taggedWith}>
        {`Tagged with `}
        {tags.map((tag, index) => (
          <Link href={`/tags/${tag}`} key={tag}>
            <a>{`${tag}${
              index === Object.entries(tags).length - 1 ? "" : ", "
            }`}</a>
          </Link>
        ))}
      </i>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      post: filename.replace(".mdx", ""),
    },
  }));

  return { paths, fallback: false };
};

const getStaticProps = async ({ params: { post } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", post + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      post,
      mdxSource,
    },
  };
};

export { getStaticPaths, getStaticProps };
export default PostPage;
