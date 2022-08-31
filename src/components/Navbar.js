import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div id='divNavbar'>
        <i id="menuIcon" className="fa-solid fa-bars"></i>
        <img alt="logo" src="https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png"></img>
        <button id="btnLogin">Log in</button>
        <button id="btnSignup">Sign Up</button>
    </div>
  )
}

export default Navbar