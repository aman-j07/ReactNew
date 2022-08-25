import React from "react";
import HelloName from "./HelloName";
const Hello=(props)=>{
  console.log(props)
    return (
      <div>
        <h1>Hello {props.name} </h1>
        <HelloName fullname={props} />
      </div>
    );
}

export default Hello;
