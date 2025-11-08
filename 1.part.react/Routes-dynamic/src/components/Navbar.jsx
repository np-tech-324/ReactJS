import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between py-5 px-7 w-full '>
        <h2 className='text-2xl font-bold '>NishTanx</h2>
        <div className=' w-100 text-xl font-bold '>
            <nav className='flex justify-evenly'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar