import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'

const Leftside = () => {
  return (
    <div className='h-159 flex flex-col justify-between w-1/3'>
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default Leftside