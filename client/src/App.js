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
import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Linum Tech - You Electronic Partner</title>
      </Helmet>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/industries/:industryTxt" Component={ IndustriesTemplate } />
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
