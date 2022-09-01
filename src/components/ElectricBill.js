import React, { Component, createRef } from 'react'

class ElectricBill extends Component {
  refUnits=createRef();billAmt=0;
  constructor(props) {
    super(props)
  
    this.state = {
       billAmt:"",
    }
  }
  clickHandlerCalculate=()=>{
    let units=this.refUnits.current.value;
    if(units<=50){
      this.billAmt=units*3.5;
    }
    else if(units>50 && units<=150){
      this.billAmt=175+((units-50)*4);
    }
    else if(units>150 && units<=250){
      this.billAmt=575+((units-150)*5.2);
    }
    else if(units>250){
      this.billAmt=1095+((units-250)*6.5);
    }
    this.setState({
      billAmt:"Your bill amount is "+this.billAmt+"/-",
    })
  }
  render() {
    return (
      <div id="divContainer">
        <div id="divHead"> Electricity Bill Calculator</div>
        <div id="divInputs">
            <div><label>Enter units used</label><input id="inpUnits" ref={this.refUnits}></input></div>
            <button id="btnCalculate" onClick={this.clickHandlerCalculate}>Calculate</button>
        </div>
        <div id="divResult">
          <p>{this.state.billAmt}</p>
        </div>
      </div>
    )
  }
}

export default ElectricBill