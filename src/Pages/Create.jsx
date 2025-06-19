import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate(); // ✅ Correct placement

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);

    setdata([...data, recipe]);
    toast.success("New recipe created");
    reset();
    navigate("/recipes"); // ✅ Use lowercase navigate
  };



  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>    
      
      <input
        {...register("image")}
        type="url"
        placeholder='Enter Image Url'
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      />
      <small className="text-red-500">error</small>  

       <input
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      />
     <input
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      />
      <textarea
        {...register("description")}     
        placeholder="//start from here"
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      ></textarea>
      <textarea
        {...register("ingredients")}
        placeholder="//write ingredients"
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      ></textarea>
    <textarea
        {...register("instruction")}
        placeholder="//write instruction"
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      ></textarea>

      <select
        {...register("category")}
        className="block border-b outline-0 p-2 my-2 text-white placeholder-white bg-gray-800"
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Super">Super</option>
        <option value="Dinner">Dinner</option>
      </select>

      <button className='mt-5 block bg-gray-950 px-4 py-2 rounded'>Save Recipe</button>
    </form>
  );
}

export default Create;
