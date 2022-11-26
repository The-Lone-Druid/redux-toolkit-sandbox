import React from "react";
import Home from "./screens/Home";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import About from "./screens/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
