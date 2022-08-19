import React, { Component } from 'react'

class HelloWorldUsingDefault extends Component {
render=()=> {
    return <div>Hello World! using default export</div>}
}
class HelloWorldUsingNamed extends Component {
render=()=> {
return <div>Hello World! using named export</div>}
}

export {HelloWorldUsingNamed}
export default HelloWorldUsingDefault

