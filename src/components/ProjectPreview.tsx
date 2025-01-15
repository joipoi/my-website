import Link from 'next/link';

export default function ProjectPreview( {post} : { post: {title: string, date: string}}){
    return (
        <div className=" p-4 mb-4 hover:shadow-md transition-shadow duration-300">
            <Link href={`https://github.com/joipoi/${post.title}`} className="block">
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
                </Link>
                <p className="text-gray-500 text-sm">{post.date}</p>
           
        </div>
    );
};