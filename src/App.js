import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="container">
      <Layout/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
