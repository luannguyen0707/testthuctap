import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

// components
import Home from "./components/Home";
import Write from "./components/Write";
import MainNav from "./components/MainNav";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
