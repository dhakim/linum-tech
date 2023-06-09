import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import AOS from "aos";
import "aos/dist/aos.css";
import IndustriesTemplate from "./pages/Industries";
import ProductsTemplate from "./pages/Products";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    AOS.init();
    document.title = 'LinumTech';
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Welcome to Linum Tech</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          {/* <Route path="/industries/oil-and-gass" element={ <OilAndGass  /> } /> */}
          <Route path="/industries/:industryTxt" Component={ IndustriesTemplate } />
          {/* <Route path="/products/electronic-components" element={<ElectronicComponents />} /> */}
          <Route path="/products/:productTxt" Component={ ProductsTemplate } />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </React.Fragment>
  );
}

export default App;
