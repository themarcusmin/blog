import { getAllPostsPath, getPostData } from "../../lib/posts";

const getStaticProps = async ({ params: { slug } }) => {
  const postData = await getPostData(slug);

  return {
    props: postData,
  };
};

const getStaticPaths = async () => {
  const paths = getAllPostsPath();

  return { paths, fallback: false };
};

import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import { MDXRemote } from "next-mdx-remote";

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

export { getStaticPaths, getStaticProps };
export default PostPage;
