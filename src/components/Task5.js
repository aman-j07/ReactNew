import React, { useState } from 'react'

const arrSel=[];
const Task5 = () => {
  let [ArrSel,setArrSel]=useState([])
  const clickHandler=()=>{
    ArrSel=arrSel;
    console.log("ArrSel=",ArrSel)
    setArrSel([ArrSel]);
  }
  const clickHandlerCheckbox=(event)=>{
    if(event.target.checked===true){
      arrSel.push(event.target.value)
    }
    else{
      for(let i=0;i<arrSel.length;i++){
        if(event.target.value==arrSel[i]){
          arrSel.splice(i,1)
        }
      }
    }
    console.log(arrSel)
  }
  return (
    <div id="task5">
        <h1>Task 5</h1>
        <div><input type="checkbox" onClick={clickHandlerCheckbox} value="Football"/><label>Football</label></div>
        <div><input type="checkbox" onClick={clickHandlerCheckbox} value="Reading Novels"/><label>Reading Novels</label></div>
        <div><input type="checkbox" onClick={clickHandlerCheckbox} value="Coding"/><label>Coding</label></div>
        <button onClick={clickHandler}>Print selected options</button>
        <ul>{arrSel.map((item)=>{return <li>{item}</li>})}</ul>
    </div>
  )
}

export default Task5