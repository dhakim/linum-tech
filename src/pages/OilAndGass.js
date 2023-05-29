import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OurPartners from '../components/OurPartners/OurPartners';
import partner3M from '../assets/images/outStrength/3M.png';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CategoryDetail from '../components/CategoryDetail/CategoryDetail';
import gassAndOilImg from '../assets/images/oil-gass.jpg';

const ourStrengthLogos = [
  partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, 
]

const images = [
  gassAndOilImg
]

const OilAndGass = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />

      <CategoryDetail 
        heading = "Oil && Gasss"
        description = "The offshore and commercial marine market is harsh on hardware and apparatus. We have components that withstand weather, corrosion, extreme temperature and tough and challenging environments. We carry special range of Tools, HSE Kits and Testing Equipment to cater the requirements of Oil and Gas Industry. We are also specialized in providing all types of electronic components used in the onshore or offshore setup in Oil & Gas industry."
        images = {images}
      />
      
      <OurPartners 
        heading="Our Partners"
        isHeadingCenter={false}
        partnerLogos={ourStrengthLogos}
      />
      <Footer />
    </React.Fragment>
  )
}
export default OilAndGass;