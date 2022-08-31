import React, { Component } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
class Calculator extends Component {
  problem = "";
  answer = "";
  constructor(props) {
    super(props);

    this.state = {
      problem: "",
      answer: "",
    };
  }
  number = (event) => {
    this.problem += event.target.textContent;
    this.setState({
      problem: this.problem,
    });
  };
  operation = (event) => {
    let last = this.problem.length - 1;
    if (this.problem[last] === "+" ||this.problem[last] === "-" ||this.problem[last] === "x" ||this.problem[last] === "/" ) {
      return;
    } 
    else if(this.problem==="" && (event.target.textContent==="/" || event.target.textContent==="*") ){
      return;
    }
    else {
      this.problem+=event.target.textContent;
    }
    this.setState({
      problem: this.problem,
    });
  };
  decimal = (event) => {
    let flag = false;
    for (let i = 0; i < this.problem.length; i++) {
      if (this.problem[i] === ".") {
        flag = true;
      }
    }

    if (flag === false) {
      this.problem += event.target.textContent;
    } else {
      return;
    }
    this.setState({
      problem: this.problem,
    });
  };
  reset = () => {
    this.problem = "";
    this.answer="";
    this.setState({
      problem: this.problem,
      answer:this.answer
    });
  };
  calculate = () => {
    this.answer = eval(this.problem);
    this.problem = "";
    this.setState({
      problem: this.problem,
      answer: this.answer,
    });
  };
  render() {
    return (
      <div id="calculator">
        <Screen problem={this.state.problem} answer={this.state.answer} />
        <Buttons number={this.number}operation={this.operation}decimal={this.decimal}reset={this.reset}calculate={this.calculate}
        />
      </div>
    );
  }
}

export default Calculator;
