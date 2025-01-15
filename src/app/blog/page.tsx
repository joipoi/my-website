import { getSortedPostsData } from '@/lib/getSortedPostsData';
import MainMenu from '@/components/MainMenu';
import PostPreview from '@/components/PostPreview';

async function BlogPage({
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string | undefined }>
}) {
  const { tag=undefined } = await searchParams;

  const posts = getSortedPostsData(tag); 

  return (
    <div>
      <MainMenu />
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
       {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
          ))}
    </div>
  );
};

export default BlogPage;