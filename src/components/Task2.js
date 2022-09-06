import React from "react";
import { createRef } from "react";

const Task2 = () => {
    const refInput=createRef();
    const clickHandler=()=>{
        refInput.current.value=refInput.current.value.toUpperCase();
    }
  return (
    <div id="task2">
      <h1>Task2</h1>
      <textarea ref={refInput} placeholder="Enter some text"/>
      <button onClick={clickHandler}>Convert to Uppercase</button>
    </div>
  );
};

export default Task2;
