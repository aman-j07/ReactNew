import React, { Component } from 'react'
import HelloNameChild from './HelloNameChild'
class HelloName extends Component {
  render() {
    return (
      <HelloNameChild name={this.props.name} />
    )
  }
}

export default HelloName