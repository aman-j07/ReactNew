import React from 'react'

const Child = (props) => {
  console.log("Child Component")
  return (
    <h1>{props.name}</h1>
  )
}

export default React.memo(Child)