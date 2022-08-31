import React, { Component } from "react";
import "./banner.css";
class banner extends Component {
  render() {
    return (
      <div id="banner">
        <div id="bannerChild">
          <h1>Order groceries for delivery or pickup today</h1>
          <p>
            Whatever you want from local stores, brought right to your door.
          </p>
        </div>
      </div>
    );
  }
}

export default banner;
