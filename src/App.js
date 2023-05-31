import React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter, Route, Routes, Outlet, useSearchParams } from "react-router-dom";
import Home from './pages/Home';
import ElectronicComponents from './pages/ElectronicComponents';
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import AOS from "aos";
import "aos/dist/aos.css";
import OilAndGass from "./pages/OilAndGass";

const Industries = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [ isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/data/industries.json', {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log('${industryTxt}');
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <h1>Name: {data}</h1>
        </>
      )}
    </>
  );
};

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
          <Route path="/industries/oil-and-gass" element={ <OilAndGass  /> } />
          <Route path="/industries/:industryTxt" Component={ Industries } />
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
