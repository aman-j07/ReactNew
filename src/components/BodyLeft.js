import React, { Component } from 'react'
import Profile from './Profile'
import Trends from './Trends'
class BodyLeft extends Component {
  render() {
    return (
      <div id='bodyLeft'>
      <Profile/>
      <Trends/></div>
    )
  }
}

export default BodyLeft