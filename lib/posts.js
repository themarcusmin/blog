import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function getAllPostsWithFrontMatter(tag) {
  // Retrieve all files under posts
  const files = fs.readdirSync(path.join("posts"));

  // Read markdown of each file and extract frontMatter + slug
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

  // Sort posts by most recent date
  posts.sort((a, b) => {
    const beforeDate = new Date(a.frontMatter.date);
    const afterDate = new Date(b.frontMatter.date);
    return afterDate - beforeDate;
  });

  // Filter posts if tag param is provided
  if (tag) {
    return posts.filter((post) => post.frontMatter.tags.includes(tag));
  }

  return posts;
}

export async function getPostData(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    frontMatter,
    slug,
    mdxSource,
  };
}

export function getAllPostsPath() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return paths;
}
