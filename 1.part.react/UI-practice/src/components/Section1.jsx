import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
import { loadConfigFromFile } from 'vite'

const Section1 = (props) => {
  console.log({props});
  
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1Content/>
    </div>
  )
}

export default Section1