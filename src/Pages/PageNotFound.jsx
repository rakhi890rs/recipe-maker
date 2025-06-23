import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-9xl font-bold text-red-700">404</h1>
      <p className="text-2xl mt-4">Oops! Page Not Found</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-red-800 hover:bg-red-700 rounded text-white"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;