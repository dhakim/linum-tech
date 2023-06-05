import React from 'react';
import './Manufacturers.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import logoArcIcon from '../../assets/images/logo-arc.svg';

const Manufacturers = ({
  heading, 
  ManufacturersList,
  manufacturerLogos
}) => {
  return(
    <React.Fragment>
      <section className="manufacturer-section">
        <div className="container">
          <SectionHeading 
            heading = {heading}
            isHeadingCenter = {true}
            classname="d-none"
          />

          <ul className="components-list">
            {
              ManufacturersList.map((item, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <span className="logo-arc-icon">
                    <img src={logoArcIcon} alt="arrow icon" width="18" />
                  </span>
                  <span className="label">{item.comp}</span>
                </li>
              ))
            }
          </ul>

          <div className="partners-section">
            <div className="partner-logos-container">
              {
                manufacturerLogos.map((item, index) => (
                  <div key={index} className="partner-logo-wrapper" data-aos="fade-up" data-aos-duration="1000">
                    <img src={item.logo} alt="Partner Logo" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default Manufacturers;