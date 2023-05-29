import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import OilAndGass from "./pages/OilAndGass";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/oil-and-gass" element={<OilAndGass />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </React.Fragment>
  );
}

export default App;
