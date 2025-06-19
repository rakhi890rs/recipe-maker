import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Recipes = () => {
  const { data } = useContext(recipecontext);

  return (
    <div>
      <h1 className="text-xl font-semibold underline mb-4">All Recipes</h1>
      {data.length === 0 ? (
        <p>No recipes available</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {data.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="hover:scale-105 duration-300">
              <div className="bg-gray-800 p-4 rounded cursor-pointer">
                <img
                  src={recipe.image}
                  alt="dish"
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h2 className="text-lg font-bold">{recipe.title}</h2>
                <p className="text-sm text-gray-400">By: {recipe.chef}</p>
                <p className="text-sm mt-2 line-clamp-2">{recipe.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
