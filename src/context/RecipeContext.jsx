import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext();

const RecipeProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
  const savedData = JSON.parse(localStorage.getItem("recipes")) || [];
  setdata(savedData);
}, []); // 👈 This makes sure it runs only once on component mount

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeProvider;
