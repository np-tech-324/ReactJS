import React from 'react'

const Card = (props) => {
  return (
    <div id='child'>
        <img src={props.img} alt="" />
        <h1>{props.h1}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, modi?</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card