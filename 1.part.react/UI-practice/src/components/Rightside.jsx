import React from 'react'
import Rightcard from './Rightcard'

const Rightside = () => {
  return (
    <div className='flex gap-10 h-159 w-2/3 bg-blue-500 py-5 px-5 overflow-hidden overflow-x-auto'>
      <Rightcard/>
      <Rightcard/>
      <Rightcard/>
    </div>
  )
}

export default Rightside