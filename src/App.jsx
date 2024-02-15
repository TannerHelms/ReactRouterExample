import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/home";
import Second from "./componets/second";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
