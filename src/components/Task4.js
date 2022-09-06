import React, { useState } from 'react'
let boolId=false;
const Task4 = () => {
  
  const [id,setId]=useState("task4");
  const clickHandler=()=>{
    boolId=!boolId;
    if(boolId===true){
      setId("task4Dark")
    }
    else{
      setId("task4")
    }
  }
  return (
    <div id={id}>
      <h1>Task 4</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
      <button onClick={clickHandler}>Change Theme</button>
    </div>
  )
}

export default Task4