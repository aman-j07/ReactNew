import React, { Component } from 'react'

class Stopwatch extends Component {
  hr=0;min=0;sec=0;mil=99;started=false;Interval;
 constructor(props) {
   super(props)
 
   this.state = {
      hour:0,
      minute:0,
      second:0,
      mili:0
   }
 }
  update=(operation)=>{
    console.log(this.started,operation)
    if(this.started===false){
      if(operation==="start"){
        this.started=true;
        this.Interval=setInterval(this.startStopwatch,10)
        console.log(this.started,operation)
      }
      else if(operation==="reset"){
        this.reset();
       console.log(this.started,operation)
      }}
    else if(this.started===true){
      if(operation==="stop"){
        this.started=false;
        clearInterval(this.Interval)
        console.log(this.started,operation)
      }
      else if(operation==="reset"){
        clearInterval(this.Interval)
        this.reset();
       this.started=false;
       console.log(this.started,operation)
      }
    }
  
  }
  reset=()=>{
    this.hr=this.min=this.sec=this.mil=0;
        this.setState({
          hour:0,
          minute:0,
          second:0,
          mili:0
       })
  }
  startStopwatch=()=>{
    if (this.mil < 99) {
      this.mil++;
    }
    else {
      this.mil = 0;
      if (this.sec < 59) {
        this.sec++;
      } else {
        this.sec = 0;
          if (this.min < 59) {
            this.min++;
          } else {
            this.min = 0;
              if (this.hr < 59) {
                this.hr++;
              }
          }
      }
    }
    this.setState({
        hour:this.hr,
        minute:this.min,
        second:this.sec,
        mili:this.mil
    })
  }
    render() {
    return (
      <div>
        <p>{this.state.hour}:{this.state.minute}:{this.state.second}:{this.state.mili}</p>
        <button onClick={()=>this.update("start")}>Start</button>
        <button onClick={()=>this.update("stop")}>Stop</button>
        <button onClick={()=>this.update("reset")}>Reset</button>
      </div>
    )
  }
}

export default Stopwatch