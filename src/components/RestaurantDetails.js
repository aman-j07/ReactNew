import React, { useState } from 'react'

const RestaurantDetails = (props) => {
  const [quantity,setQuantity]=useState(1);

  const updateQuantity=(e)=>{
    if(e.target.innerHTML=="+"){
      setQuantity((prevState) => (prevState+1));
    }
    else if(e.target.innerHTML=="-"){
      if(quantity>1){
      setQuantity((prevState) => (prevState-1));
    }
  }
  }

  const Add=(e)=>{
    console.log(quantity)
    props.AddtoCart(e,quantity)
    alert("Added to Cart")
    setQuantity(1)
  }
  return (<>
       <button id="btnClose" onClick={props.clickHandler}>X</button>
    <div id="detail">
        <img alt={props.detail.name} src={props.detail.photograph}/>
        <div>
          <h2 className='detailName'>{props.detail.name}</h2>
          <p id="detailWeight">{props.detail.weight}</p>
          <p id="detailPrice">₹{props.detail.price}</p>
          <div id="detailDescription"><p>Desciption:</p><p id="paraDescription">Mewa Bites are the perfect sweet gifts that are exchanged on festive occasions such as Diwali, Holi, Rakhshabandhan and Ganesh Chaturthi. Place an online order of these rich and crunchy quick Bites of dry fruits immersed in milk solids and sugar and get delivery at your home. We deliver sweets all over India & internationally across the USA, UK, Singapore & many other countries.</p></div>
          <div id="divAdd"><button onClick={updateQuantity}>-</button><p id="itemQuantity">{quantity}</p><button onClick={updateQuantity}>+</button></div>
          <button id="btnAdd" onClick={Add} index={props.detail.id}>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default RestaurantDetails