import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navginate = useNavigate()
  return (
    <div className='flex px-5 py-3 bg-cyan-500'>
        <button onClick={()=>{
            navginate(+1)
        }} className='px-3 py-1 bg-amber-500 mr-1.5 rounded'>next</button>
        <button onClick={()=>{
            navginate(-1)
        }} className='px-3 py-1 bg-amber-500 mr-1.5 rounded'>back</button>
    </div>
  )
}

export default Navbar2