import React, { Component } from 'react'

class Screen extends Component {
  render() {
    return (
        <div id="input"><div id="inputNumber"><p>{this.props.problem}</p></div><div id="inputAnswer"><hr></hr>{this.props.answer}</div></div>
    )
  }
}

export default Screen