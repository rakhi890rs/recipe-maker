import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { Link } from 'react-router-dom';

const Fav = () => {
  const { data } = useContext(recipecontext);

  // Filter favorites based on localStorage
  const favRecipes = data.filter((recipe) => {
    const fav = localStorage.getItem(`fav-${recipe.id}`);
    return fav === 'true';
  });

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">❤️ Your Favorite Recipes</h2>

      {favRecipes.length === 0 ? (
        <p className="text-gray-400">No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-gray-800 rounded shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-400 mb-2">By {recipe.chef}</p>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fav;
