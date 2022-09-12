import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div id="navBar">
          <i class="fa-brands fa-lyft" />
          <div>
            <Link to="/cities">CITIES</Link>
            <Link to="/drives">DRIVES</Link>
            <Link to="/blogs">BLOG</Link>
            <Link to="/partners">PARTNERS</Link>
            <Link to="/help">HELP</Link>
          </div>
        </div>
    </>
  );
};

export default Layout;
