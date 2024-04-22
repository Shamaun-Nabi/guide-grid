import fs from "fs";
import matter from "gray-matter";
import path from "path";
const postDirectory = path.join(process.cwd(), "docs");

export const getDoc = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postDirectory);
  //   console.log(fileNames);

  // Loop over the file names to get data and return it
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    // console.log(id.bgYellow)
    // Read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    // console.log(fullPath.bgCyan)
    //
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    // console.log(matterResult)
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else {
      return 1;
    }
  });
};
