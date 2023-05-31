import React from 'react';
import './OurPartners.scss';

const OurPartners = ({heading, sectionID, isHeadingCenter, partnerLogos}) => {
  return(
    <React.Fragment>
      <section className="partners-section" id={sectionID}>
        <div className="container">
          <h2 className={isHeadingCenter ? 'center' : ''} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">{heading}</h2>
          
          <div className="partner-logos-container">
            {
              partnerLogos.map((item, index) => (
                <div key={index} className="partner-logo-wrapper" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <img src={item} alt='Partner Logo' />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default OurPartners;