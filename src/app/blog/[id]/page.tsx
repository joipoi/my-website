import { getSortedPostsData } from '@/lib/getSortedPostsData';
import BlogPost from '@/components/BlogPost';
import MainMenu from '@/components/MainMenu';

export default async function PostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const posts =  getSortedPostsData(); 

  const post = posts.find((p) => p.id === params.id); 
  
  
    if (!post) {
      return <div>Post not found.</div>;
    }

    return (
      <>
      <MainMenu></MainMenu>
      <BlogPost title={post.title} content={post.content} date={post.date} tags={post.tags} />
      </>
    );
  };