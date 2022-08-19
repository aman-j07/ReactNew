import React, { Component } from "react";
import pic from './playground.png'
class BodyMid extends Component {
  render() {
    return (
      <div id="bodyMid">
        <img src={pic}></img>
        <h2>Playground</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          minima cum perferendis quia iusto deserunt voluptates aliquid
          aspernatur. Eos distinctio excepturi officiis, autem iusto esse magnam
          praesentium nisi error laboriosam?
        </p>
        <button>Go Anywhere</button>
      </div>
    );
  }
}

export default BodyMid;
