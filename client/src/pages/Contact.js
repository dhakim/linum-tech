import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ContactDetail from '../components/ContactDetail/ContactDetail';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <React.Fragment>
      <Header/>
      <Helmet>
        <title>Linum Tech - Get in Touch with us</title>
      </Helmet>
      <HeroSlider />
      <ContactDetail />
      <Footer />
    </React.Fragment>
  )
}
export default Contact;