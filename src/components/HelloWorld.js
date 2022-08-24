import React from 'react'

const HelloWorlDefault=()=>{
return <h1>Hello World! using default export</h1>
}

const HelloWorldNamed=()=>{
return <h1>Hello World! using named export</h1>
}

export {HelloWorldNamed}
export default HelloWorlDefault