import React from 'react'
import RightCard1 from './RightCard1'


const Rightcard = () => {
  return (
    <div className='h-full w-80 bg-amber-200 rounded-4xl shrink-0 relative'>
        <img className='h-full w-full object-cover rounded-4xl' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688" alt="" />
        <RightCard1/>
    </div>
  )
}

export default Rightcard