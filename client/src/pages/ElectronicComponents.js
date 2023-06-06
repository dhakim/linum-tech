import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OurPartners from '../components/OurPartners/OurPartners';
import partner3M from '../assets/images/outStrength/3M.png';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ProductComponents from '../components/ProductComponents/ProductComponents';

const ourStrengthLogos = [
  partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, 
];

const componentList = [
  'TFT (Thin Film Transistor)',
  'LED (Light Emitting Diodes)',
  ' VFD (Vacuum Fluorescent Display)',
  'OLED (Organic Light Emitting Diodes)', 
  'Capacitors',
  'Resistor',
  'Ferrites',
  'Potentiometer',
  'Inductor',
  'Memory ICs ',
  'Dsicrete Semiconductor',
  'Integrated ICs',
  'Frequency Control & Timings'
]

const ElectronicComponents = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />
      <ProductDetail 
        heading = "Electronic Components"
        description = {
          <div>
            <p>Found in almost every electrical device in the world,We stock components from the industry-leading manufacturers and every item in our components range is available for fast and efficient delivery. Our selection of components aims to cater for all projects and applications.</p>

            <p>We have a wide range of products when it comes to sourcing, detecting and controlling light. These electrical-to-optical and optical-to-electrical transducers and instruments will cover all your optronics needs.</p>
          </div>
        }
      />

      <ProductComponents 
        heading = "Components List"
        componentList = {componentList}
      />
      <OurPartners 
        heading="Our Partners"
        isHeadingCenter={true}
        partnerLogos={ourStrengthLogos}
      />
      <Footer />
    </React.Fragment>
  )
}
export default ElectronicComponents;