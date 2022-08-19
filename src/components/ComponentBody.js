import React, { Component } from 'react'
import CompLeft from './ComponentLeft'
import CompRight from './ComponentRight'
class CompBody extends Component {
  render() {
    return (
      <div id='compBody'> <CompLeft/><CompRight/></div>
    )
  }
}

export default CompBody