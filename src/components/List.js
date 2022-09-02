import React, { Component } from 'react'

class List extends Component {
    fruits=["Mango","Apple","Banana","Grapes","Tomato"]
  render() {
    return (<>
      <h2>list of fruits</h2>
      <ul>
       {this.fruits.map(item=>{return <li>{item}</li>})}
      </ul>
      </>
    )
  }
}

export default List