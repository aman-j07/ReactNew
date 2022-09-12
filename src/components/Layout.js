import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div id="navBar">
          <img src="https://educadd.co.in/wp-content/uploads/2022/06/Untitled-design-2022-06-08T030657.832-e1654637921334.png" />
          <div>
            <Link to="/">HOME</Link>
            <Link to="/products">OUR PRODUCTS</Link>
            <Link to="/contact">CONTACT US</Link>
          </div>
        </div>
        <div id="navBar2"><i class="fa-brands fa-facebook"/><i class="fa-brands fa-instagram"/></div>
    </>
  );
};

export default Layout;
