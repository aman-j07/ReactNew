import React, { Component } from 'react'
import CompHead from './ComponentHead'
import CompBody from './ComponentBody'
class ReactApp extends Component {
  render() {
    return (<div id='reactApp'>ReactApp 
    <CompHead/>
    <CompBody/></div>)
  }
}
export default ReactApp