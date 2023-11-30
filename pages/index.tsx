import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
      <p>This is the home page of the application.</p>
      <nav className="flex flex-col mt-4 space-y-2">
        <a href="/about" className="text-blue-600 hover:underline">About Us</a>
        <a href="/api-data" className="text-blue-600 hover:underline">API Data</a>
      </nav>
    </div>
  );
};

export default Home;
