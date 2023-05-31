import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import OilAndGass from "./pages/OilAndGass";
import ElectronicComponents from './pages/ElectronicComponents';
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <Route path="/industries/oil-and-gass" element={<OilAndGass />} />
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
