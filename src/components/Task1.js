import React from "react";
import { useState } from "react";
import { createRef } from "react";

const Task1 = () => {
    const refInput=createRef();
    const [num,setNum]=useState("");
    const clickHandler=()=>{
        setNum(refInput.current.value);
    }
  return (
    <div id="task1">
      <h1>Task1</h1>
      <input type="number" ref={refInput} placeholder="Enter a number"></input>
      <button onClick={clickHandler}>Display</button>
      <p>{num}</p>
    </div>
  );
};

export default Task1;
