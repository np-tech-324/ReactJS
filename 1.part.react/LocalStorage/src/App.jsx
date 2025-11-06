import React from 'react'

const App = () => {
  const user = {
    user:"Nishant",
    age:23,
    occupation:"Student"
    }

    localStorage.setItem("user",JSON.stringify(user))
    console.log(user);
    const user2 = JSON.parse(localStorage.getItem("user"))
    console.log(user2);
    
    localStorage.removeItem(age)

    // localStorage.clear()
  return (
    <div>App</div>
  )
}

export default App
