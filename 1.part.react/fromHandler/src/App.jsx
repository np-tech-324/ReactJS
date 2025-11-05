import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')

  const fromHandler = (e)=>{
    e.preventDefault()
    console.log("From submitted by", name)

    setName("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        fromHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter the Name'
        value={name}
        onChange={(e)=>{
          setName(e.target.value);
        }}
        />
        <button>Submited</button>
      </form>
    </div>
  )
}

export default App