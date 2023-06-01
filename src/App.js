import React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter, Route, Routes, Outlet, useParams } from "react-router-dom";
import Home from './pages/Home';
import ElectronicComponents from './pages/ElectronicComponents';
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import AOS from "aos";
import "aos/dist/aos.css";
import OilAndGass from "./pages/OilAndGass";
import IndustriesTemplate from "./pages/Industries";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          {/* <Route path="/industries/oil-and-gass" element={ <OilAndGass  /> } /> */}
          <Route path="/industries/:industryTxt" Component={ IndustriesTemplate } />
          <Route path="/products/electronic-components" element={<ElectronicComponents />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </React.Fragment>
  );
}

export default App;
