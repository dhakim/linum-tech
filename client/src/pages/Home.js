import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IntroBlock from '../components/IntroBlock/IntroBlock';
import OurPartners from '../components/OurPartners/OurPartners';
import HeroSlider from '../components/HeroSlider/HeroSlider';

const ourStrengthLogos = [
  "/assets/images/construction/Siemens.jpg",
  "/assets/images/utilities-and-grid/Rhodes-and-Schwarz.png",
  "/assets/images/oil-and-gass/schnieder.png",
  "/assets/images/oil-and-gass/Metcal.png",
  "/assets/images/construction/Honeywell.png",
  "/assets/images/construction/mox.jpg",
  "/assets/images/education/keysight.png",
  "/assets/images/transportation/HELLERMAN.jpg",
  "/assets/images/defence/belden.jpg",
  "/assets/images/defence/lapp-kabel.png",
  "/assets/images/construction/pixhawak.png",
  "/assets/images/defence/schroff.png",
  "/assets/images/education/peaktech.png",
  "/assets/images/defence/alpha-wire.png",
  "/assets/images/utilities-and-grid/Crouzet.png",
  "/assets/images/defence/huber.jpeg",
  "/assets/images/defence/Hameg.jpg",
  "/assets/images/education/Fluke-Networks.jpeg",
  "/assets/images/oil-and-gass/wruthh.png",
  "/assets/images/oil-and-gass/pheonix.jpg",
  "/assets/images/education/weller.png",
  "/assets/images/oil-and-gass/SMC.jpg",
  "/assets/images/oil-and-gass/FLir.png",
  "/assets/images/defence/GAIA.jpg",
  "/assets/images/construction/Seed-studio.png",
  "/assets/images/utilities-and-grid/ELektro-automatik.png",
  "/assets/images/construction/Eaton.png",  
  "/assets/images/arduino.png",
  "/assets/images/utilities-and-grid/ABB.png",
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