import React from 'react';

const About = () => {
  return (
    <section className="min-h-[75vh] bg-gray-900 text-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-200">About Recipe Maker</h1>
        <p className="text-base text-gray-300">
          Recipe Maker is a small project where you can save, edit, and manage your cooking recipes in one place.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Simple to Use</h3>
          <p className="text-sm text-gray-400">
            The interface is clean and easy. You can quickly add your recipes.
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Favorite Recipes</h3>
          <p className="text-sm text-gray-400">
            You can mark recipes you like and view them anytime.
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Edit or Delete</h3>
          <p className="text-sm text-gray-400">
            You can edit your recipes or delete them whenever needed.
          </p>
        </div>
      </div>

      <p className="mt-12 text-xs text-center text-gray-500">
        Built using React & Tailwind CSS — By Rakhi Singh
      </p>
    </section>
  );
};

export default About;
