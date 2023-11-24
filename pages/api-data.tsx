import React, { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiDataPage = () => {
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
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataPage;
import Link from 'next/link';

<Link href="/api-data">
  <a className="text-blue-500 hover:text-blue-700">Go to API Data Page</a>
</Link>
