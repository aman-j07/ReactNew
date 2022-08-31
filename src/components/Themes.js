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
    this.setState({
        class:this.class,
    })
  };
  render() {
     if(this.state.class==="light"){
      this.element=( <div id="theme" className="light" >
        <h1>React Themes</h1>
        <button id="light" onClick={this.clickHandlerTheme}>Light</button>
        <button id="dark" onClick={this.clickHandlerTheme}>Dark</button>
        <button id="party" onClick={this.clickHandlerTheme}>Party</button>
      </div>)
     }
     else if(this.state.class==="dark"){
      this.element=( <div id="theme" className="dark" >
        <h1>React Themes</h1>
        <button id="light" onClick={this.clickHandlerTheme}>Light</button>
        <button id="dark" onClick={this.clickHandlerTheme}>Dark</button>
        <button id="party" onClick={this.clickHandlerTheme}>Party</button>
      </div>)
     }
     else if(this.state.class==="party"){
      this.element=( <div id="theme" className="party" >
        <h1>React Themes</h1>
        <button id="light" onClick={this.clickHandlerTheme}>Light</button>
        <button id="dark" onClick={this.clickHandlerTheme}>Dark</button>
        <button id="party" onClick={this.clickHandlerTheme}>Party</button>
      </div>)
     }
    return <>{this.element}</>;
  }
}

export default Themes;
