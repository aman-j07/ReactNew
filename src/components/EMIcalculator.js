import React, { Component, createRef } from "react";

class EMIcalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emi: '',
      totalInt: '',
      totalAmt: '',
      empty:"",
      resultId:"divResultHidden",
    };
  }refAmt = createRef();refInterest = createRef();refYears = createRef();refMonths = createRef();refEmpty = createRef();resultId="";resultToggle=false;
  clickHandlerCalculate = () => {
    this.setState({
        empty:"",
      })
    let amt = "",interest = "",years = "",months = "",emi='',totalAmt='',totalInt='';
    amt = parseInt(this.refAmt.current.value);
    interest = parseInt(this.refInterest.current.value);
    years = parseInt(this.refYears.current.value);
    months = parseInt(this.refMonths.current.value);
    if (isNaN(amt) || isNaN(interest) || isNaN(years) || isNaN(months)) {
      this.setState({
        empty:"Please fill in all the fields",
      })
    } else {
      let totalMon = parseInt(years * 12 + months);
      let intRateMon = interest / 100 / 12;
      emi = (
        (amt * intRateMon * Math.pow(1 + intRateMon, totalMon)) /
        (Math.pow(1 + intRateMon, totalMon) - 1)
      ).toFixed(2);
      totalAmt=emi*totalMon;
      totalInt=(totalAmt-amt).toFixed(2);
    }
    this.setState({
        emi: emi,
        totalInt: totalInt,
        totalAmt: totalAmt,
    })
  };
  clickHandlerReset = () => {;this.refAmt.current.value="";this.refInterest.current.value="";this.refYears.current.value="";this.refMonths.current.value=""
    this.setState({
        emi: '',
        totalInt: '',
        totalAmt: '',
        empty:"",
      })
  };
  clickHandlerDetails = () => {
     this.resultToggle=this.resultToggle!==true;
     if(this.resultToggle===true){
        this.resultId="divResult"
     }
     else{
        this.resultId="divResultHidden"
     }
     this.setState({
        resultId:this.resultId
     })
     console.log(this.state.resultId,this.resultToggle)
  };
  render() {
    return (
      <div id="divContainer">
        <div id="divHead">
          <i className="fa-solid fa-bars"></i>EMI Calculator
          <button id="btnRefresh">
            <i className="fa-solid fa-rotate-right" />
          </button>
        </div>
        <div id="divBody">
          <div id="divInputs">
            <div>
              <input className="inpRadio" type="radio" />
              <p>Loan Amount</p>
              <input
                type="number"
                ref={this.refAmt}
                className="inpNumber"
                id="inpAmount"
              />
            </div>
            <div>
              <input className="inpRadio" type="radio" />
              <p>Interest %</p>
              <input
                type="number"
                ref={this.refInterest}
                className="inpNumber"
                id="inpInterest"
              />
            </div>
            <div>
              <input className="inpRadio" type="radio" />
              <p>Period</p>
              <div id="divInpPeriod">
                <input
                  type="number"
                  ref={this.refYears}
                  className="inpPeriod"
                  id="inpPeriodYears"
                />
                <input
                  type="number"
                  ref={this.refMonths}
                  className="inpPeriod"
                  id="inpPeriodMonths"
                />
              </div>
            </div>
            <div>
              <input className="inpRadio" type="radio" />
              <p>EMI</p>
              <input type="number" className="inpNumber" id="inpEMI" disabled value={this.state.emi}/>
            </div>
          </div>
          <div id="divButtons">
            <button onClick={this.clickHandlerCalculate}>CALCULATE</button>
            <button onClick={this.clickHandlerReset}>RESET</button>
            <button onClick={this.clickHandlerDetails}>DETAILS</button>
          </div>
          <p id="paraEmpty" ref={this.refEmpty}>{this.state.empty}</p>
          <div id={this.state.resultId}>
            <table id="tabResult">
              <tbody>
                <tr>
                  <td>Monthly EMI</td>
                  <td>{this.state.emi}</td>
                </tr>
                <tr>
                  <td>Total Interest</td>
                  <td>{this.state.totalInt}</td>
                </tr>
                <tr>
                  <td>Total Payment</td>
                  <td>{this.state.totalAmt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EMIcalculator;
