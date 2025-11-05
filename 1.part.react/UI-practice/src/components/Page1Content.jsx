import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

const Page1Content = () => {
  return (
    <div className='h-full w-full flex gap-10  px-10 '>
        <Leftside/>
        <Rightside/>
    </div>
  )
}

export default Page1Content