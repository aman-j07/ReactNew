import React from 'react'

const Bill = (props) => {
    let cart=props.cart;
  return (
    <div id="divCart">
		<div id="cartHead"><h1>Cart---	</h1><button id="btnEmptyCart"><i class="fa-solid fa-trash-can"></i></button></div>
		<table id="tableCart">
        {cart.map((item)=>{ return <tr><td><img src={item.image}></img></td><td><h3>{item.name}</h3><p>Price: {item.price}.00</p><p>Quantity: <input type='number' class='inpQuantity' min='1' id='inp"+$cartProducts[i].id+"'/></p><p>Total price: ${item.price}.00 </p></td><td id='cross' ><button class='cross' >X</button></td></tr>})}
        </table>
		<strong id="gTotal"></strong>
	</div>
  )
}

export default Bill