import React, { Component, createRef } from "react";

export class List extends Component {
  left = "<";
  right = ">";
  refGroup1 = createRef();
  refGroup2 = createRef();
  group1=["AJAX", "JQuery", "Javascript", "MooTools", "Prototype", "Doja"];group2=["ASP.net", "C#", "VB.net", "Java", "PHP", "Python"];

  constructor(props) {
    super(props);

    this.state = {
      group1:this.group1,
      group2:this.group2,
    };
  }
  clickHandlerRight = () => {
    let arrTemp=[];
    arrTemp=this.refGroup1.current.selectedOptions;
    for(let i=0;i<arrTemp.length;i++){
        this.group2.push(arrTemp[i].innerHTML);
        for(let j=0;j<this.group1.length;j++){
            if(arrTemp[i].innerHTML===this.group1[j]){
                this.group1.splice(j,1);
            }
        }
    }
    this.setState({
        group1:this.group1,
        group2:this.group2,
    })
  };
  clickHandlerLeft = () => {
    let arrTemp=[];
    arrTemp=this.refGroup2.current.selectedOptions;
    for(let i=0;i<arrTemp.length;i++){
        this.group1.push(arrTemp[i].innerHTML);
        for(let j=0;j<this.group2.length;j++){
            if(arrTemp[i].innerHTML===this.group2[j]){
                this.group2.splice(j,1);
            }
        }
    }
    this.setState({
        group1:this.group1,
        group2:this.group2,
    })
  };
  render() {
    return (
      <div id="container">
        <div className="groups">
          Group 1
          <select id="group1" size="10" multiple ref={this.refGroup1}>
            {this.state.group1.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div id="buttons">
          <button onClick={this.clickHandlerRight}>{this.right}</button>
          <button onClick={this.clickHandlerLeft}>{this.left}</button>
        </div>
        <div className="groups">
          Group 2
          <select id="group2" size="10" multiple ref={this.refGroup2}>
            {this.state.group2.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default List;
