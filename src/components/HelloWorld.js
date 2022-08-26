import React, { Component } from 'react'
import HelloName from './HelloName'
class HelloWorld extends Component {
  render() {
    return <HelloName name={this.props.name}/>
  }
}


export default HelloWorld