import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(10)
  useEffect(()=>{
    console.log('UseEffect is running ...')
  },[num])
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num1}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum1(num1 + 10)
      }}
      >Change</button>
    </div>
  )
}

export default App