import { createContext, useState } from "react";

export const recipecontext = createContext();

const RecipeProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeProvider;
