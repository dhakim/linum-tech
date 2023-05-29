import React from 'react';
import './OurPartners.scss';

const OurPartners = ({heading, sectionID, isHeadingCenter, partnerLogos}) => {
  return(
    <React.Fragment>
      <section className="partners-section" id={sectionID}>
        <div className="container">
          <h2 className={isHeadingCenter ? 'center' : ''}>{heading}</h2>
          
          <div className="partner-logos-container">
            {
              partnerLogos.map((item, index) => (
                <div key={index} className="partner-logo-wrapper">
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