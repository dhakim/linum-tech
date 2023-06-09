import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import OurPartners from '../components/OurPartners/OurPartners';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CategoryDetail from '../components/CategoryDetail/CategoryDetail';
import industriesData from '../data/industries.json';
import { Helmet } from 'react-helmet';

const IndustriesTemplate = () => {
    let { industryTxt } = useParams();
    let industry = industriesData.industries[`${industryTxt}`];

  return (
    <React.Fragment>
      <Helmet>
        <title>{"Linum Tech - " + industry.title}</title>
      </Helmet>
      <HeroSlider />

      <CategoryDetail 
        heading = { industry.title } 
        description = { industry.description }
        images = { industry.mediaImages }
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