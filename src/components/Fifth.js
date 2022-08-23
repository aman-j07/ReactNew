import React, { Component } from 'react'
import style from './Fifth.module.css'

class Fifth extends Component {
  render() {
    return (
      <div id={style.fifth}>
        <div id={style.headQuestions}><h1>Questions ?</h1>
        <p>We've got answers</p></div>
        <div>What is Spotify and Spotify Premium?<i class="fa-solid fa-angle-down"></i></div>
        <hr></hr>
        <div>How do I cancel?<i class="fa-solid fa-angle-down"></i></div>
        <hr></hr>
        <div>How does the Duo and Family plan work?<i class="fa-solid fa-angle-down"></i></div>
        <hr></hr>
        <div>How many devices can I listen to?<i class="fa-solid fa-angle-down"></i></div>
        <hr></hr>
        <div>How does the student plan work?<i class="fa-solid fa-angle-down"></i></div>
      </div>
    )
  }
}

export default Fifth