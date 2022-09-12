import React from "react";

const Home = () => {
  return (
    <div id="background">
      <div id="inner">
        <p>Make up to $35/hour Driving Your Car</p>
        <div id="signUp">
          <h2>Apply Now</h2>
          <p>
            Enter your info and then download the Lyft app to create your driver
            profile
          </p>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email Address" />
          <input placeholder="City" />
          <input placeholder="Phone number" />
          <input placeholder="Promo Code (optional)" />
          <div>
            <p id="mini">
              I agree to <a>Lyft Terms</a>
            </p>
          </div>
          <button id="btnDriver">BECOME A DRIVER</button>
          <div>
            <p id="mini">Already applied? <a>Check the status of your application here</a></p>
          </div>
        </div>
      </div>
      <div id="footer"><div><h3>See How Much You Can Make</h3>
      <p>How many hours do you want to drive this week?</p>
      <div><input id="inpHours" placeholder="Hours"/><input id="inpCity" placeholder="City"/><button id="btnCalculate">CALCULATE</button></div></div></div>
    </div>
  );
};

export default Home;
