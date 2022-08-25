import React, { Component } from 'react'

class Child extends Component {
    
  render() { 
    var problem=this.props.num1+this.props.operation+this.props.num2;
    var sol=eval(problem);
    return (
      <h2>{problem}={sol}</h2>
    )
  }
}

export default Child