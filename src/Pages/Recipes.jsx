import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  console.log("data from context:", data); // 🔍 check if data is coming

  return (
    <div className="p-4">
      {data && data.length > 0 ? (
        data.map((recipe) => (
          <div key={recipe.id} className="text-white border-b py-2">
            <h1 className="text-xl font-bold">{recipe.title}</h1>
            <p className="text-sm italic">Chef: {recipe.chef}</p>
            <img src={recipe.image} alt={recipe.title} className="w-40 h-28 object-cover my-2" />
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No recipes added yet</p>
      )}
    </div>
  );
};

export default Recipes;
