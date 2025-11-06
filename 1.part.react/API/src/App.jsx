import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  // const getData = async ()=>{

  //   const data = await fetch('https://jsonplaceholder.typicode.com/photos')
  //   const all = await data.json()
  //   console.log(all);
    
  // }
  
  const getData = async ()=>{
    const respone = await axios.get('https://picsum.photos/v2/list')
    setData(respone.data);
    
  }

  
  return (
    <div>
      <button onClick={getData}>Get </button>
      <div>{data.map((elem,idx)=>{
        return <h1>hello {elem.author}</h1>
      })}</div>
    </div>
  )
}

export default App