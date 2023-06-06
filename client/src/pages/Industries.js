import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OurPartners from '../components/OurPartners/OurPartners';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CategoryDetail from '../components/CategoryDetail/CategoryDetail';
import industriesData from '../data/industries.json';

const IndustriesTemplate = () => {
    let { industryTxt } = useParams();
    let industry = industriesData.industries[`${industryTxt}`];
    const images = [
        industry.image,
        industry.image
    ]

  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />

      <CategoryDetail 
        heading = { industry.title } 
        description = { industry.description }
        images = { images }
      />
      
      <OurPartners 
        heading="Our Partners"
        isHeadingCenter={ false }
        partnerLogos={ industry.logos }
      />
      <Footer />
    </React.Fragment>
  )
}
export default IndustriesTemplate;