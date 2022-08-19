import React, { Component } from 'react'
import CompRightChild from './ComponentRightChild'
class CompRight extends Component {
  render() {
    return (
      <div id='compRight'>Component
        <CompRightChild/>
      </div>
    )
  }
}

export default CompRight