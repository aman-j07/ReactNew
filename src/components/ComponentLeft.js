import React, { Component } from 'react'
import CompLeftChild from './ComponentLeftChild'
class CompLeft extends Component {
  render() {
    return (
      <div id='compLeft'>Component
        <CompLeftChild/>
        <CompLeftChild/>
      </div>
    )
  }
}

export default CompLeft