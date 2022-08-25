import React, { Component } from 'react'
import HelloName from './HelloName'
class Hello extends Component {
  render() {
    return <HelloName name={this.props.name}/>
  }
}


export default Hello