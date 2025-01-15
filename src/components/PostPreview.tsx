import Link from 'next/link';
import {PostData} from '@/lib/PostData';

export default function PostPreview({ post }: { post: PostData }){
    return (
        <div className=" p-4 mb-4 hover:shadow-md transition-shadow duration-300">
            <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
                </Link>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p className="text-gray-400 text-sm">{post.tags.join(', ')}</p>
           
        </div>
    );
};