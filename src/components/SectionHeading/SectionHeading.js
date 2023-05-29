import React from 'react';
import './SectionHeading.scss';
import headingIcon from '../../assets/images/heading-icon.svg';

const SectionHeading = ({heading}) => {
  return(
    <React.Fragment>
      <div className="section-heading">
        <div className="icon-container">
          <img src={headingIcon} alt="icon" />
        </div>
        
        <h2>Oil & Gas</h2>
      </div>
    </React.Fragment>
  )
}
export default SectionHeading;