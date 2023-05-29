import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IntroBlock from '../components/IntroBlock/IntroBlock';
import OurPartners from '../components/OurPartners/OurPartners';
import partner3M from '../assets/images/outStrength/3M.png';
import HeroSlider from '../components/HeroSlider/HeroSlider';

const ourStrengthLogos = [
  partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, 
]

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />
      <IntroBlock />
      <OurPartners 
        heading="Our Strength"
        sectionID="our_strength"
        isHeadingCenter={false}
        partnerLogos={ourStrengthLogos}
      />
      <Footer />
    </React.Fragment>
  )
}
export default Home;