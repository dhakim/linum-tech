import React from "react";
import './ContactDetail.scss';
import SectionHeading from "../SectionHeading/SectionHeading";
import emailIcon from '../../assets/images/email-icon.svg';
import ContactForm from "./ContactForm";
import emailBlueIcon from '../../assets/images/email-blue-icon.svg';
import phoneBlueIcon from '../../assets/images/phoneBlueIcon.svg';

const ContactDetail = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="contact-section">
          <div className="contact-form-wrapper">
            <SectionHeading heading="Get In Touch" icon={emailIcon} />
            <ContactForm />
          </div>
          <div className="contact-information">
            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Contact Info</h3>

            <p className="address" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              Linum Technologies LLC. Office # 2501, Jumeirah Bay Tower X3, Cluster X, Sheikh Zayed Road, Jumeirah Lakes Towers, Jumeirah, Dubai
            </p>

            <div className="contact-info-wrapper">
              <div className="contact-info">
                <span className="icon" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"><img src={emailBlueIcon} alt="email" /></span>
                <a href="mailto:info@linumtech.com" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">info@linumtech.com</a>
              </div>

              <div className="contact-info">
                <span className="icon" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"><img src={phoneBlueIcon} alt="phone" /></span>
                <a href="tel:+ 971547 864 447" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">+ 971547 864 447</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="map" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6420183703954!2d55.14839538643726!3d25.080119679171553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca738f53aa5%3A0x455cda22409a3edf!2sJumeirah%20Bay%20-%20Jumeirah%20Lake%20Towers%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1685424596269!5m2!1sen!2sus" width="100%" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Linum Tech map"></iframe>
      </div>
    </React.Fragment>
  )
}

export default ContactDetail