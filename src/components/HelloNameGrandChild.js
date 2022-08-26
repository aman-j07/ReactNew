import React, { Component } from 'react'

class HelloNameGrandChild extends Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}

export default HelloNameGrandChild