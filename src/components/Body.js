import React, { Component } from 'react'
import BodyLeft from './BodyLeft'
import BodyMid from './BodyMid'
import BodyRight from './BodyRight'
class Body extends Component {
  render() {
    return (
      <div id='divBody'>
        <BodyLeft/>
        <BodyMid/>
        <BodyRight/>
      </div>
    )
  }
}

export default Body
