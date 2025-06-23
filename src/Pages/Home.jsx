// src/Pages/Home.jsx
import React, { useEffect } from 'react';
import axios from '../utils/axios';

const Home = () => {
  const getproduct = async () => {
    try {
      // const { data } = await axios.get("/products");
      // console.log(data);
      const response = await axios.get("/products");
      console.log(response.data);


    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(()=>{
    getproduct();
  },[]);

  return (
    <div>
      <h3>Home</h3>
      <button className='bg-slate-950' onClick={getproduct}>Get Products</button>
    </div>
  );
};

export default Home;
