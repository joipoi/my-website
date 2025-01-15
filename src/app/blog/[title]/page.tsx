import { getSortedPostsData } from '@/lib/getSortedPostsData';
import BlogPost from '@/components/BlogPost';
import MainMenu from '@/components/MainMenu';

export async function generateStaticParams() {
  const posts = getSortedPostsData(); 

  return posts.map((post) => ({
    
    title: post.title.replaceAll(" ", "-"),
  }))
}

export default async function PostPage(props: { params: Promise<{ title: string }> }) {
  const params = await props.params;

  const posts =  getSortedPostsData(); 

  const post = posts.find((p) => p.title.replaceAll(" ", "-") === params.title); 
  
  
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