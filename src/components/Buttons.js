import React, { Component } from 'react'

class Buttons extends Component {
  render() {
    return (
        <div id="buttons">
        <div id="first">
          <button id="7" onClick={this.props.number}>7</button>
          <button id="8" onClick={this.props.number}>8</button>
          <button id="9" onClick={this.props.number}>9</button>
          <button id="0" onClick={this.props.number}>0</button>
        </div>
        <div id="second">
          <button id="4" onClick={this.props.number}>4</button>
          <button id="5" onClick={this.props.number}>5</button>
          <button id="6" onClick={this.props.number}>6</button>
          <button id="." onClick={this.props.decimal}>.</button>
        </div>
        <div id="third">
          <button id="1" onClick={this.props.number}>1</button>
          <button id="2" onClick={this.props.number}>2</button>
          <button id="3" onClick={this.props.number}>3</button>
          <button id="reset" onClick={this.props.reset}>C</button>
        </div>
        <div id="fourth">
            <button id="add" onClick={this.props.operation}>+</button>
            <button id="subtract" onClick={this.props.operation}>-</button>
            <button id="divide" onClick={this.props.operation}>/</button> 
            <button id="multiply" onClick={this.props.operation}>*</button>
          <button id="equals" onClick={this.props.calculate}>=</button>
        </div>
      </div>
    )
  }
}

export default Buttons