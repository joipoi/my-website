import MainMenu  from '@/components/MainMenu'
import ProjectPreview from '@/components/ProjectPreview';

export default function Home() {
    const posts = [
        {title:"Puppeteer_jobSearch", date:" Dec 11, 2024"},
        {title:"roskilde_ui_node", date:"Dec 3, 2024"},
        {title:"wordle-copy", date:"Nov 11, 2024"},
        {title:"SkaggbyranCodeServer", date:"Oct 29, 2024"},
        {title:"javascriptGuide", date:"Sep 23, 2024"},
        {title:"DB_Navigator", date:"Jul 19, 2024"}
        ]; 
    return ( 
        <>
        <MainMenu></MainMenu>
         {posts.map((post) => (
                <ProjectPreview key={post.title} post={post} />
                  ))}
    </>
);
}