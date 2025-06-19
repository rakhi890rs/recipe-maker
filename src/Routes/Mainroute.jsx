import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import Create from '../Pages/Create'
import SinglePage from '../Pages/SinglePage' 

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/recipe/:id" element={<SinglePage />} />
    </Routes>
  )
}

export default Mainroute
