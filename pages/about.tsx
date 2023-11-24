import React from 'react';
import Link from 'next/link'; 

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p>This is the about page for our Next.js app.</p>
      <Link href="/index">
        <a className="text-blue-600 hover:underline">Go back home</a>
      </Link>
    </div>
  );
};

export default About;
