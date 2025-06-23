import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const SinglePage = () => {
  const { data, setdata } = useContext(recipecontext);
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = data.find((item) => item.id === id);

  const [isFav, setIsFav] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (recipe) {
      reset(recipe);
      const favStatus = localStorage.getItem(`fav-${id}`);
      setIsFav(favStatus === 'true');
    }
  }, [recipe, reset, id]);

  const favourite =JSON.parse(localStorage.getItem("fav"));
  const favouriteHandler = () => {
    const updated = !isFav;
    setIsFav(updated);
    localStorage.setItem(`fav-${id}`, updated);
    toast.info(updated ? 'Added to Favorites' : 'Removed from Favorites');
  };

  const onSubmit = (updatedRecipe) => {
    const newData = data.map((item) =>
      item.id === id ? { ...updatedRecipe, id } : item
    );
    setdata(newData);
    localStorage.setItem('recipes', JSON.stringify(newData));
    toast.success('Recipe updated successfully');
    navigate('/recipes');
  };

  const handleDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this recipe?');
    if (confirm) {
      const filteredData = data.filter((item) => item.id !== id);
      setdata(filteredData);
      localStorage.setItem('recipes', JSON.stringify(filteredData));
      toast.success('Recipe deleted successfully');
      navigate('/recipes');
    }
  };

  return recipe ? (
    <div className='flex gap-4 p-6 text-white'>

      {/* 🍽 Left section: Image + Heart */}
      <div className='w-1/2 relative'>

        {/* ❤️ Favorite Toggle - Top Right of Image */}
        <span onClick={favouriteHandler} className='absolute top-2 right-2 cursor-pointer'>
          {isFav ? (
            <HeartSolid className='w-8 h-8 text-red-600' />
          ) : (
            <HeartOutline className='w-8 h-8 text-white' />
          )}
        </span>

        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full h-[30vh] object-cover rounded'
        />
      </div>

      {/* 📝 Right section: Form */}
      <div className='w-1/2'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('image')}
            type='url'
            placeholder='Image URL'
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white placeholder-white'
          />

          <input
            {...register('chef')}
            type='text'
            placeholder='Chef Name'
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white placeholder-white'
          />

          <input
            {...register('title')}
            type='text'
            placeholder='Recipe Title'
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white placeholder-white'
          />

          <textarea
            {...register('description')}
            placeholder='Description'
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white placeholder-white'
          ></textarea>

          <textarea
            {...register('ingredients')}
            placeholder='Ingredients'
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white placeholder-white'
          ></textarea>

          <textarea
            {...register('instruction')}
            placeholder='Instructions'
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white placeholder-white'
          ></textarea>

          <select
            {...register('category')}
            className='block border-b outline-0 p-2 my-2 w-full bg-gray-800 text-white'
          >
            <option value='Breakfast'>Breakfast</option>
            <option value='Lunch'>Lunch</option>
            <option value='Super'>Super</option>
            <option value='Dinner'>Dinner</option>
          </select>

          <button type='submit' className='bg-blue-800 px-4 py-2 mt-4 rounded'>
            Update Recipe
          </button>
          <br />
          <button
            type='button'
            onClick={handleDelete}
            className='bg-red-800 px-4 py-2 mt-4 rounded'
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className='text-center text-white text-xl'>Loading...</div>
  );
};

export default SinglePage;
