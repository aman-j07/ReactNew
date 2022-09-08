import React from 'react'

const RestaurantsList = (props) => {
  return (
    <div id='restaurantsList'>
      <div id="list">
        {props.matched.map((item,i)=>{ return <div key={i} className="item"><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name}</p><p id="paraCuisine">{item.cuisine_type}</p><p id='paraPlace'>{item.neighborhood}</p></div></div>})}
      </div>
    </div>
  )
}

export default RestaurantsList