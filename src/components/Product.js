import React, { Component } from 'react'
import './Product.css'
class Product extends Component {
  render() {
    return (
        <div id="product-101" className="product">
				<img src={this.props.pic}/>
				<h3 className="title"><a href="#">{this.props.name}</a></h3>
				<span>Price: {this.props.price}</span>
				<a className="add-to-cart" href="#">Add To Cart</a>
      </div>
    )
  }
}

export default Product