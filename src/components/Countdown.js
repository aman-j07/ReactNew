import React, { Component } from 'react'

class Countdown extends Component {
  hour;minute;second;intervalCountdown;flag=0;
 constructor(props) {
   super(props)
 
   this.state = {
      hour:0,
      minute:0,
      second:0
   }
 }
  setCountdown=()=>{
    clearInterval(this.intervalCountdown)
    let date=new Date();
    this.hour=date.getHours();    
    this.minute=date.getMinutes();
    this.second=date.getSeconds();
   this.intervalCountdown=setInterval(this.startCountDown,1000)
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