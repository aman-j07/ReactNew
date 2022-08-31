import React, { Component } from 'react'

class ChangeBackground extends Component {
    class="";
  render() {
    if(this.props.num%2===0){
      this.class="red"
    }
    else{
        this.class="blue"
    }
    
    return (
      <div className={this.class} id="change">
        
      </div>
    )
  }
}

export default ChangeBackground