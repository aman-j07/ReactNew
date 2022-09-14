import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Aman",
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Aman",
            })
        },2000)

    }
  render() {
    console.log("Parent Component")
    return (
      <div><Child name={this.state.name}/></div>
    )
  }
}

export default Parent