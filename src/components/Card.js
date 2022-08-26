import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
    <div className='card' id={props.color}>
      <div className='header'>{props.header}</div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}
