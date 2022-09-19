import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantsList from "./RestaurantsList";
import logo from './logo-removebg-preview.png'

let matched = [];

const Restaurants = (props) => {
  const restaurants=props.restaurants;

  const [Matched, setMatched] = useState(restaurants);
  const changeHandlerSearch = (event) => {
    if(event.key==="Enter"){
    matched = [];
    let item = event.target.value;
    for (let i = 0; i < restaurants.length; i++) {
      if (
        restaurants[i].name.slice(0, item.length).toUpperCase() ==
          item.toUpperCase()) {
        matched.push(restaurants[i]);
      }
    }
    setMatched([...matched]);
}
  };

  const Filter=(e)=>{
    if(e.target.value!="Filter By"){
        matched = [];
        let index = e.target.selectedIndex;
        for (let i = 0; i < restaurants.length; i++) {
          if (
            restaurants[i].category==index) {
            matched.push(restaurants[i]);
          }
        }
    }
    setMatched([...matched]);
  }

  const Sort=(e)=>{
    if(e.target.selectedIndex===2){
    Matched.sort((a,b) => a.price - b.price);
    }
    else if(e.target.selectedIndex===1){
    Matched.sort((a,b) => b.price - a.price);
    }
    setMatched([...Matched])
  }

  return (
    <>
      <div id="divNavbar">
          <img id="logo" src={logo}/>
        <div id="divSearch">
          <input
            onKeyDown={changeHandlerSearch}
            id="inpSearch"
            placeholder="Search for your favorite bites.."
          />
          <i id="searchIcon" className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <Link to="/"><a id="aSearch" onClick={props.clickHandler}>
            Log Out
          </a></Link>
         <Link to="/cart"> <i className="fa-solid fa-cart-shopping" /></Link>
        </div>
      </div>
      <div id="search">
        <div id="offer">
          <p id="paraOffer">
            Get<pre className="error"> Flat 50% OFF </pre>on your first order!!!
          </p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s2Y5CJo8efJzKpwA1qoqD3fgIC18t_YrqA&usqp=CAU"></img>
      </div>
      <div id="sortFilter">
        <select id="selFilter" onChange={Filter}>
          <option>Filter By</option>
          <option>Laddoo</option>
          <option>Chena</option>
          <option>Rasgulla</option>
          <option>Chocolate flavoured</option>
          <option>Traditional Sweets</option>
          <option>Peda</option>
          <option>Festival Specialities</option>
          <option>Mewa Special</option>
        </select>
        <select id="selSort" onChange={Sort}>
          <option>Sort By</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
        </select>
      </div>
      <RestaurantsList matched={Matched} AddtoCart={props.AddtoCart}/>
    </>
  );
};

export default Restaurants;
