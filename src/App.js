import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Event from "./components/Event";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
function App() {
  return (
    <div className="container">
      <Layout/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/gallery" element={<Gallery />} />
           <Route path="/event" element={<Event />}/>
           <Route path="/contact" element={<Contact />} />
           <Route path="/feedback" element={<Feedback />} />
        </Routes>
    </div>
  );
}

export default App;
