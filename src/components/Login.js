import React from "react";

const Login = () => {
  return (
    <div id="containerSignLog">
      <div id="signLog">
        <div id="logIn">
          <p className="signLogHeading">Log In</p>
          <div>
            <input placeholder="Enter Username" id="newEmailPhone" />
            <input placeholder="Enter Password" id="oldPassword" />
          </div>
          <button id="OldSubmit">Log In</button>
        </div>
      </div>
    </div> 
  );
};

export default Login;
