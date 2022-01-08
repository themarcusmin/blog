import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
