import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Men from './pages/Men'

import { Route, Routes } from 'react-router-dom'
import Kids from './pages/Kids'
import Women from './pages/Women'
import Error from './pages/Error'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar/>
      {/* <Products/> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products />}>
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        <Route path='kids' element={<Kids />} />
      </Route>

      <Route path='*' element={<Error/>}/>
    </Routes>
      
    </div>
  )
}

export default App