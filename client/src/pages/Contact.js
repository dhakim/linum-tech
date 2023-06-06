import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ContactDetail from '../components/ContactDetail/ContactDetail';

const Contact = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />
      <ContactDetail />
      <Footer />
    </React.Fragment>
  )
}
export default Contact;