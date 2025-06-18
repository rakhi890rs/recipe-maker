import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';

const Create = () => {
  const { data, setdata }=useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler=(recipe)=>{
    recipe.id=nanoid();
    console.log(recipe);



    // const copydata=[...data];
    // copydata.push(recipe);
    // setdata(copydata);
    setdata([...data,recipe])
    reset();
  }


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
        {...register("tittle")}
        type="text"
        placeholder="Recipe Tittle"
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
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className='mt-5 block bg-gray-950 px-4 py-2 rounded'>Save Recipe</button>
    </form>
  );
}

export default Create;
