import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OurPartners from '../components/OurPartners/OurPartners';
import partner3M from '../assets/images/outStrength/3M.png';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CategoryDetail from '../components/CategoryDetail/CategoryDetail';

const ourStrengthLogos = [
  partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, 
]

const OilAndGass = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />

      <CategoryDetail />
      
      <OurPartners 
        heading="Our Partners"
        isHeadingCenter={true}
        partnerLogos={ourStrengthLogos}
      />
      <Footer />
    </React.Fragment>
  )
}
export default OilAndGass;