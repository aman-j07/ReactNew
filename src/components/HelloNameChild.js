import React, { Component } from 'react'
import HelloNameGrandChild from './HelloNameGrandChild'
class HelloNameChild extends Component {
  render() {
    return (
      <HelloNameGrandChild name={this.props.name}/>
    )
  }
}

export default HelloNameChild