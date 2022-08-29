import React, { Component } from 'react'

class Countdown extends Component {
  hour;minute;second;
 constructor(props) {
   super(props)
 
   this.state = {
      hour:0,
      minute:0,
      second:0
   }
 }
  setCountdown=()=>{
    this.hour=new Date().getHours();
    this.minute=new Date().getMinutes();
    this.second=new Date().getSeconds();
    
   this.interval=setInterval(this.startCountDown,1000)
  }
  startCountDown=()=>{
     if(this.second>=1){
      this.second--;
    }
    else{
        this.second=59;
        if(this.minute>=1){
            this.minute--;
        }
        else{
            this.minute=59;
            if(this.hour>1)
            {
                this.hour--;
            }
            else{
                this.hour=0;
            }
        }
    }
    this.setState({
        hour:this.hour,
        minute:this.minute,
        second:this.second
    })
  }
    render() {
    return (
      <div>
        <p>{this.state.hour}:{this.state.minute}:{this.state.second}</p>
        <button onClick={this.setCountdown}>Start</button>
      </div>
    )
  }
}

export default Countdown