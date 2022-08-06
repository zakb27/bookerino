import React, {useState} from "react";
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
