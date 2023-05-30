import React from 'react';
import './SectionHeading.scss';
import headingIcon from '../../assets/images/heading-icon.svg';

const SectionHeading = ({heading, isHeadingCenter, icon}) => {
  return(
    <React.Fragment>
      <div className={`section-heading ${isHeadingCenter ? 'center' : ''}`}>
        <div className="icon-container">
          <img src={icon ? icon : headingIcon} alt="icon" />
        </div>
        
        <h2>{heading}</h2>
      </div>
    </React.Fragment>
  )
}
export default SectionHeading;