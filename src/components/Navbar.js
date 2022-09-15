import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div id="navBar">
        <div id={style.first}>
        <div id={style.divLogo}>
          {/* <img alt="logo" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>  */}
          <div id={style.divPlus}><p id={style.paraExplore}>Explore</p><p id={style.paraPlus}>Plus</p>
          {/* <img alt="plusLogo" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"></img> */}
          </div>
        </div>
        <div id={style.divSearch}><input id={style.inpSearch} placeholder="Search for products, brands and more"></input><i id={style.searchIcon} class="fa-solid fa-magnifying-glass"></i></div>
        <button id={style.btnLogin}>Login</button>
        <a id={style.seller} href="#">Become a Seller</a>
        <p id={style.paraMore}>More <i class="fa-solid fa-angle-down"></i></p>
        <a id={style.cart} href="#"><div><i class="fa-solid fa-cart-shopping"></i>Cart</div></a>
      </div>
    </div>
  )
}

export default Navbar