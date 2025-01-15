import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {PostData} from '@/lib/PostData';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(tag?: string): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      content: matterResult.content,
      tags: matterResult.data.tags as string[], 
    };
  });

  // If a tag is provided, filter the posts by that tag
  const filteredPostsData = tag
    ? allPostsData.filter(post => post.tags && post.tags.includes(tag))
    : allPostsData;

  return filteredPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}