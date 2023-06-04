import React from 'react';
import './SectionHeading.scss';
import headingIcon from '../../assets/images/heading-icon.svg';

const SectionHeading = ({heading, isHeadingCenter, icon, classname}) => {
  return(
    <React.Fragment>
      <div className={`section-heading ${isHeadingCenter ? 'center' : ''}`}>
        <div className={`icon-container ${classname}`} data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <img src={icon ? icon : headingIcon} alt="icon" />
        </div>
        
        <h2 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">{heading}</h2>
      </div>
    </React.Fragment>
  )
}
export default SectionHeading;