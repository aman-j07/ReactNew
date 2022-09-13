import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
let id="navBar"
function App() {
  return (
    <div className="container">
      <Layout/>
        <Routes>
           <Route path="/" element={<Home clickHandler={push} arrUsers={ArrUsers}/>} />
           <Route path="/login" element={<Login  clickHandler={changeId} arrUsers={ArrUsers}/>} />
        </Routes>
    </div>
  );
}

export default App;
