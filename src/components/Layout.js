import {  Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div id="navBar">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/event">Event</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </>
  )
};

export default Layout;