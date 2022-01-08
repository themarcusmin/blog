import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllTags() {
  // Retrieve all files under posts
  const files = fs.readdirSync(path.join("posts"));
  // Set to store unique tag names
  const allTags = new Set();
  // Read markdown of each file and extract tags
  files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    data.tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
}

export async function getAllTagsWithCount() {
  // Retrieve all files under posts
  const files = fs.readdirSync(path.join("posts"));
  // Store tag and its count
  const tags = {};
  // For each file, iterate through tags to store count
  files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    data.tags.forEach(
      (tagName) => (tags[tagName] = tags[tagName] ? tags[tagName] + 1 : 1)
    );
  });
  return tags;
}
