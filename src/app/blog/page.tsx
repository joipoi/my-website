import { getSortedPostsData } from '@/lib/getSortedPostsData';
import MainMenu from '@/components/MainMenu';
import PostPreview from '@/components/PostPreview';

async function BlogPage(){

  const posts = getSortedPostsData(); 

  return (
    <div>
      <MainMenu />
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
       {posts.map((post) => (
        <PostPreview key={post.title} post={post} />
          ))}
    </div>
  );
};

export default BlogPage;