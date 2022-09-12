import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cities from "./components/Cities";
import Drives from "./components/Drives";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Help from "./components/Help";
function App() {
  return (
    <div className="container">
      <Layout/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/cities" element={<Cities />} />
           <Route path="/drives" element={<Drives />} />
           <Route path="/blogs" element={<Blogs />} />
           <Route path="/partners" element={<Partners />} />
           <Route path="/help" element={<Help />} />
        </Routes>
    </div>
  );
}

export default App;
