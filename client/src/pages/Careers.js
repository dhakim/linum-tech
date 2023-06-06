import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CareersFormDetail from '../components/CareersFormDetail/CareersFormDetail';

const Careers = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />
      <CareersFormDetail />
      <Footer />
    </React.Fragment>
  )
}
export default Careers;