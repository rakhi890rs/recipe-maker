import React, { useContext } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

// Shared classes to keep things tidy
const fieldClasses =
  "w-full rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none p-3";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const updatedData = [...data, recipe];
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success("🎉 New recipe added!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-full max-w-3xl bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-pink-400">
          Add a New Recipe 🍳
        </h2>

        {/* Form grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Image URL */}
          <div className="space-y-1 col-span-2">
            <label className="text-gray-300">Image URL</label>
            <input
              {...register("image", { required: true })}
              type="url"
              placeholder="https://example.com/delicious.jpg"
              className={fieldClasses}
            />
            {errors.image && (
              <p className="text-sm text-red-500">Please provide a valid image URL</p>
            )}
          </div>

          {/* Chef Name */}
          <div className="space-y-1">
            <label className="text-gray-300">Chef Name</label>
            <input
              {...register("chef", { required: true })}
              type="text"
              placeholder="Gordon Ramsay"
              className={fieldClasses}
            />
            {errors.chef && (
              <p className="text-sm text-red-500">Chef name is required</p>
            )}
          </div>

          {/* Recipe Title */}
          <div className="space-y-1">
            <label className="text-gray-300">Recipe Title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Ultimate Pancakes"
              className={fieldClasses}
            />
            {errors.title && (
              <p className="text-sm text-red-500">Recipe title is required</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-1 col-span-2">
            <label className="text-gray-300">Short Description</label>
            <textarea
              {...register("description", { required: true })}
              rows={3}
              placeholder="What makes this recipe special?"
              className={fieldClasses}
            ></textarea>
            {errors.description && (
              <p className="text-sm text-red-500">A brief description helps others!</p>
            )}
          </div>

          {/* Ingredients */}
          <div className="space-y-1">
            <label className="text-gray-300">Ingredients (comma separated)</label>
            <textarea
              {...register("ingredients", { required: true })}
              rows={4}
              placeholder="Flour, Eggs, Milk, ..."
              className={fieldClasses}
            ></textarea>
            {errors.ingredients && (
              <p className="text-sm text-red-500">List the ingredients</p>
            )}
          </div>

          {/* Instructions */}
          <div className="space-y-1">
            <label className="text-gray-300">Instructions</label>
            <textarea
              {...register("instruction", { required: true })}
              rows={4}
              placeholder="Step‑by‑step cooking guide"
              className={fieldClasses}
            ></textarea>
            {errors.instruction && (
              <p className="text-sm text-red-500">Please add instructions</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="text-gray-300">Category</label>
            <select {...register("category")} className={fieldClasses}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Snack">Snack</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button className="w-full py-3 rounded-md bg-pink-600 hover:bg-pink-700 transition duration-200 font-semibold tracking-wide">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
