import React, { Component, createRef } from "react";

class BMICalculator extends Component {
  refHeight = createRef();
  refWeight = createRef();
  units = "";
  class = "";
  unselected = false;
  constructor(props) {
    super(props);

    this.state = {
      BMI: "",
      weightStatus: "",
      unselected: "",
    };
  }

  clickHandlerCalulate = () => {
    this.unselected = false;
    this.setState({
      BMI: "",
      weightStatus: "",
      unselected: "",
    });
    let height = this.refHeight.current.value;
    let weight = this.refWeight.current.value;
    let BMI = 0;
    let weightStatus = "";
    if (this.units === "kg-metres") {
      BMI = (weight / (height * height)).toFixed(2);
    } else if (this.units === "lbs-inches") {
      BMI = ((weight / (height * height)) * 703).toFixed(2);
    } else {
      this.unselected = true;
    }
    if (this.unselected === false) {
      if (BMI < 18.5) {
        weightStatus = "Underweight";
        this.class = "blue";
      } else if (BMI >= 18.5 && BMI < 25) {
        weightStatus = "Healthy Weight";
        this.class = "green";
      } else if (BMI >= 25 && BMI < 30) {
        weightStatus = "Overweight";
        this.class = "yellow";
      } else if (BMI >= 30) {
        weightStatus = "Obesity";
        this.class = "red";
      }
      console.log(BMI, weightStatus);
      this.setState({
        BMI: "Your BMI = " + BMI,
        weightStatus: weightStatus,
      });
    } else {
      this.setState({
        unselected: "Please select units first!",
      });
    }
  };
  changeHandlerUnit = (event) => {
    this.units = event.target.value;
  };
  render() {
    return (
      <div id="divContainer">
        <div id="divHead">BMI Calculator</div>
        <div id="divInputs">
          <select onChange={this.changeHandlerUnit}>
            <option>---Select Units---</option>
            <option>kg-metres</option>
            <option>lbs-inches</option>
          </select>
          <div>
            <label>Enter Height</label>
            <input ref={this.refHeight} id="inpHeight" />
          </div>
          <div>
            <label>Enter Weight</label>
            <input ref={this.refWeight} id="inpWeight" />
          </div>
          <button id="btnCalculate" onClick={this.clickHandlerCalulate}>
            Calculate
          </button>
        </div>
        <p id="paraUnselected">{this.state.unselected}</p>
        <div id="divResult">
          <p>{this.state.BMI}</p>
          <p id={this.class} className="paraStatus">
            {this.state.weightStatus}
          </p>
        </div>
      </div>
    );
  }
}

export default BMICalculator;
