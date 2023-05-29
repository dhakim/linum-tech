import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import OilAndGass from "./pages/OilAndGass";
import ElectronicComponents from './pages/ElectronicComponents';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/industries/oil-and-gass" element={<OilAndGass />} />
          <Route path="/products/electronic-components" element={<ElectronicComponents />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </React.Fragment>
  );
}

export default App;
