import React from 'react'
import Navbar from './Components/Navbar'
import Mainroute from './Routes/Mainroute'

const App = () => {
  return (
    <div className='w-screen min-h-screen bg-gray-800 text-white font-thin px-[10%]'>
      <Navbar />
      <Mainroute />
    </div>
  )
}

export default App
