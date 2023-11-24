import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
    </div>
  );
};

export default HomePage;
import Link from 'next/link';

<Link href="/api-data">
  <a className="text-blue-500 hover:text-blue-700">Go to API Data Page</a>
</Link>
