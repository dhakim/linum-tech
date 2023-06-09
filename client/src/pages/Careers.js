import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CareersFormDetail from '../components/CareersFormDetail/CareersFormDetail';
import { Helmet } from 'react-helmet';

const Careers = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Linum Tech - Careers</title>
      </Helmet>
      <HeroSlider />
      <CareersFormDetail />
      <Footer />
    </React.Fragment>
  )
}
export default Careers;