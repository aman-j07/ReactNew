import React from 'react'

const Products = (props) => {
    const products=props.products;
  return (
    <div id="products">
        {products.map((item)=>{return ( <div id={item.id} class='product'><img src={item.image}/><h3 class='title'><a href='#'>{item.name}</a></h3><span>Price: ₹{item.price}.00</span><a class='add-to-cart'>Add To Cart</a></div>)})}
    </div>
  )
}

export default Products