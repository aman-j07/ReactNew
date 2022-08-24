import React from 'react'

const HelloWorldUsingDefault=()=>{
return <h1>Hello World! using default export</h1>
}

const HelloWorldUsingNamed=()=>{
return <h1>Hello World! using named export</h1>
}

export {HelloWorldUsingNamed}
export default HelloWorldUsingDefault