import React from "react";
import HelloName from "./HelloName";
const HelloWorld=(props)=>{
  console.log(props)
    return (
      <div>
        <h1>Hello {props.name} </h1>
        <HelloName fullname={props} />
      </div>
    );
}

export default HelloWorld;