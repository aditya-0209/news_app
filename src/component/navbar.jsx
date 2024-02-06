import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <div className="flex items-center justify-between bg-pink-700 p-2">
        <Link to="/" className='text-white text-center font-sans text-3xl font-bold hover:text-blue-400 transition-duration-300 p-3'>News App
        </Link>

        <div>
        <Link to="/" className="text-white hover:text-blue-400 transition duration-300 px-2">Top Headlines</Link>
        <Link to="/everything" className='text-white hover:text-blue-400 transition-duration-300 px-3'>All News</Link>
        <Link to="/source" className='text-white hover:text-blue-400 transition-duration-300 px-3'>Sources</Link>
        </div>
        

    </div>
  )
}

export default NavBar