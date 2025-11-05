// import React, { useState } from 'react'

// const App = () => {
//     const [num, setNum] = useState(0)

//     function IncreaseNum() {
//         setNum(num+1)
//     }
//     function DecreaseNum() {
//         setNum(num-1)
//     }
//     function JumpBy5() {
//         setNum(num + 5)
//     }
//   return (
//     <div>
//         <h1>{num}</h1>
//         <button onClick={IncreaseNum}>IncreaseNum</button>
//         <button onClick={DecreaseNum}>DecreaseNum</button>
//         <button onClick={JumpBy5}>Jump by 5</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState([10,20,30])
    const ChangeOnClick = ()=>{
        const NewNum = [...num]
        NewNum.push([20,40,50]) 
        
        setNum(NewNum)
    }
    
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={ChangeOnClick}></button>
    </div>
  )
}

export default App