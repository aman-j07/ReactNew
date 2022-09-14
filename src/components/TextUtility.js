import React, { useState } from 'react'

const TextUtility = () => {
    let[str,setStr]=useState({value:"",words:0,characters:0});
    const changeHandler=(e)=>{
        str.value=e.target.value;
        str.characters=str.value.length;
        const arr = str.value.split(' ');
        str.words=arr.length;
        setStr({...str});
    }
    const changeCase=(e)=>{
        if(e.target.innerHTML=="Upper Case"){
            str.value=str.value.toUpperCase();
        }
        else if(e.target.innerHTML=="Lower Case"){
            str.value=str.value.toLowerCase();
        }
        setStr({...str})
    }
  return (
    <div id="box">
        <textarea placeholder='Enter some text' value={str.value} onChange={changeHandler}/>
        <div id="divBtn"><button onClick={changeCase}>Upper Case</button><button onClick={changeCase}>Lower Case</button></div>
        <div>
            <h3>Summary</h3>
            <p>{str.words} words and {str.characters} characters.</p>
        </div>
    </div>
  )
}

export default TextUtility