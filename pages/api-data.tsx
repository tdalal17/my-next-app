import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiDataPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: Post[] = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">API Data</h1>
      <nav className="mb-4">
        <Link href="/index">
          <a className="text-blue-600 hover:underline">Go back home</a>
        </Link>
      </nav>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataPage;
