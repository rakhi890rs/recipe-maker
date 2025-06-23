import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Recipe-Maker 🍽️
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 max-w-xl">
          Discover, create, and manage your favorite recipes all in one place. Cook with love ❤️
        </p>

      </div>
    </div>
  );
};

export default Home;
