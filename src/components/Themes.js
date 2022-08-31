import React, { Component } from "react";
import "./Light.css"
import './Dark.css'
import './Party.css'
class Themes extends Component {
  class = "light";
  id="theme";
  constructor(props) {
    super(props)
  
    this.state = {
       class:this.class,
    }
  }
  clickHandlerTheme = (event) => {
    this.id=""
    this.class = event.target.getAttribute("id");
    console.log(this.class)
    this.setState({
        class:this.class,
    })
  };
  render() {
    return (
      <div id="theme" className={this.class} >
        <h1>React Themes</h1>
        <button id="light" onClick={this.clickHandlerTheme}>Light</button>
        <button id="dark" onClick={this.clickHandlerTheme}>Dark</button>
        <button id="party" onClick={this.clickHandlerTheme}>Party</button>
      </div>
    );
  }
}

export default Themes;
