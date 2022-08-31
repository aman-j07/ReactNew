import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div id='divNavbar'>
        <i id="menuIcon" className="fa-solid fa-bars"></i>
        <img alt="logo" src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"></img>
        <button id="btnLogin">Log in</button>
        <button id="btnSignup">Sign Up</button>
    </div>
  )
}

export default Navbar