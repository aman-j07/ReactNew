import React from 'react'

function HelloWorlDefault(){
return <h1>Hello World! using default export</h1>
}

function HelloWorldNamed(){
return <h1>Hello World! using named export</h1>
}

export {HelloWorldNamed}
export default HelloWorlDefault