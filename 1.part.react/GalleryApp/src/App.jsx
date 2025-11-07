import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [userdata, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }


  useEffect(()=>{
    getData()
  },[index])
  let printdata = (
    <p className="text-gray-400 text-6xl absolute top-1/2 left-[50%] -translate-x-1/2  -translate-y-1/2 items-center w-full mt-10">
      Loading ....
    </p>
  )

  if (userdata.length > 0) {
    printdata = userdata.map((elem, idx) => (
      <div
        key={idx}
        className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-green-400/30 transition-all duration-300"
      >
        <a  href={elem.url} target='-blank'>
          <img
          src={elem.download_url}
          className="h-44 w-full object-cover"
          alt={elem.author}
        />
        <div className="p-3 text-sm text-center text-gray-300">
          {elem.author}
        </div>
        </a>
      </div>
    ))

  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-6">
      {/* <h1 className='fixed bg-amber-400 text-8xl'>{index}</h1> */}
      <button
        onClick={getData}
        className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg shadow-md transition-all duration-300 mb-6"
      >
        Get Data
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {printdata}
      </div>
      <div className='flex items-center gap-4 mt-10'>
        <button className=' bg-amber-500 text-black rounded-xl px-3 py-1' 
        onClick={()=>{
          if(index > 1){
            setIndex(index - 1)
            setUserData([])
          }
          

        }}
        >perv</button>
        <h3>page {index}</h3>
        <button className= ' bg-amber-500 text-black rounded-xl px-3 py-1'
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >next</button>
      </div>
    </div>
  )
}

export default App
