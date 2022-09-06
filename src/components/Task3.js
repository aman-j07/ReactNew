import React from "react";
import { useState } from "react";

const Task3 = () => {
    const [day,setDay]=useState("Sunday");
    const changeHandler=(event)=>{
        setDay(event.target.value);
    }
  return (
    <div id="task3">
      <h1>Task3</h1>
      <p>Select a number to print its respective day</p>
      <select onChange={changeHandler}><option value="Sunday">1</option><option value="Monday">2</option><option value="Tuesday">3</option><option value="Wednesday">4</option><option value="Thursday">5</option><option value="Friday">6</option><option value="Saturday">7</option></select>
      <p>{day}</p>
    </div>
  );
};

export default Task3;