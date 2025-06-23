import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-x-10 text-sm py-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-red-300 underline' : 'text-white'
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? 'text-red-300 underline' : 'text-white'
        }
      >
        Recipes
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'text-red-300 underline' : 'text-white'
        }
      >
        About
      </NavLink>

      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          isActive ? 'text-red-300 underline' : 'text-white'
        }
      >
        Create Recipe
      </NavLink>

      <NavLink
        to="/fav"
        className={({ isActive }) =>
          isActive ? 'text-red-300 underline' : 'text-white'
        }
      >
        Favourite
      </NavLink>
    </nav>
  );
};

export default Navbar;
