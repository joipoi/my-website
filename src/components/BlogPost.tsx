"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function PostContent({ title, date, tags, content }: {title: string;content: string;date: string;tags: string[]}) {
  return (
    <div id="blogBody" className="mx-auto max-w-3xl px-4">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div>
        <span className="font-italic">{date}</span>
        {tags.map((tag, index) => (
          <Link 
            href={`/blog?tag=${tag}`} 
            key={index} 
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline pl-4"
          >
            {tag}
          </Link>
        ))}
      </div>
      <ReactMarkdown
        components={{
          h1: ({  ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
          h2: ({  ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
          h3: ({  ...props }) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
          p: ({  ...props }) => <p className="mb-4" {...props} />,
          li: ({  ...props }) => <li className="ml-4 list-disc" {...props} />,
          a: ({  ...props }) => <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
