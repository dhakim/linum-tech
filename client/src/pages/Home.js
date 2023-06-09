import React from 'react';
import Footer from '../components/Footer/Footer';
import IntroBlock from '../components/IntroBlock/IntroBlock';
import OurPartners from '../components/OurPartners/OurPartners';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import { Helmet } from 'react-helmet';

const ourStrengthLogos = [
  {logo: "/assets/images/construction/Siemens.jpg"},
  {logo: "/assets/images/utilities-and-grid/Rhodes-and-Schwarz.png"},
  {logo: "/assets/images/oil-and-gass/schnieder.png"},
  {logo: "/assets/images/oil-and-gass/Metcal.png"},
  {logo: "/assets/images/construction/Honeywell.png"},
  {logo: "/assets/images/construction/mox.jpg"},
  {logo: "/assets/images/education/keysight.png"},
  {logo: "/assets/images/transportation/HELLERMAN.jpg"},
  {logo: "/assets/images/defence/belden.jpg"},
  {logo: "/assets/images/defence/lapp-kabel.png"},
  {logo: "/assets/images/construction/pixhawak.png"},
  {logo: "/assets/images/defence/schroff.png"},
  {logo: "/assets/images/education/peaktech.png"},
  {logo: "/assets/images/defence/alpha-wire.png"},
  {logo: "/assets/images/utilities-and-grid/Crouzet.png"},
  {logo: "/assets/images/defence/huber.jpeg"},
  {logo: "/assets/images/defence/Hameg.jpg"},
  {logo: "/assets/images/education/Fluke-Networks.jpeg"},
  {logo: "/assets/images/oil-and-gass/wruthh.png"},
  {logo: "/assets/images/oil-and-gass/pheonix.jpg"},
  {logo: "/assets/images/education/weller.png"},
  {logo: "/assets/images/oil-and-gass/SMC.jpg"},
  {logo: "/assets/images/oil-and-gass/FLir.png"},
  {logo: "/assets/images/defence/GAIA.jpg"},
  {logo: "/assets/images/construction/Seed-studio.png"},
  {logo: "/assets/images/utilities-and-grid/ELektro-automatik.png"},
  {logo: "/assets/images/construction/Eaton.png"}, 
  {logo: "/assets/images/arduino.png"},
  {logo: "/assets/images/utilities-and-grid/ABB.png"},
]

const Home = () => {
  return (
    <React.Fragment>
      
      <Helmet>
        <title>Linum Tech - You Electronic Partner</title>
      </Helmet>
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