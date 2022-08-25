import React from 'react'

const Child=(props)=>{
    var problem=props.num1+props.operation+props.num2;
    var sol=eval(problem);
    return (
      <h2>{problem}={sol}</h2>
    )
}

export default Child