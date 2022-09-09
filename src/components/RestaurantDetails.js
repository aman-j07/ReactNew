import React, { useState } from 'react'

const RestaurantDetails = (props) => {

  let opHours=Object.entries(props.detail.operating_hours);
  console.log(opHours)
  return (<>
       <button id="btnClose" onClick={props.clickHandler}>X</button>
    <div id="detail">
        <img alt={props.detail.name} src={props.detail.photograph}/>
        <div>
          <h2 className='detailName'>{props.detail.name}</h2>
          <p>Operational Hours :---</p>
          <div className='detailOpHours'>{opHours.map((item)=><p>{item[0]}-{item[1]}</p>)}</div>
          <div id="reviews">
           <h3>Reviews:</h3>
           {props.detail.reviews.map((item)=>{ return <div className="review"><div><p className='reviewName'>{item.name}</p><p className='reviewDate'>{item.date}</p></div><p className='reviewRating'>Rating--{item.rating}</p><p className="reviewComments">{item.comments}</p></div>})}
          </div>
        </div>
    </div>
    </>
  )
}

export default RestaurantDetails