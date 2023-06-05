import React from 'react';
import './CareersFormDetail.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import CareerForm from './CareerForm';

const CareersFormDetail = () => {
  return(
    <React.Fragment>
      <section className="careers-section">
        <div className="container">
          <SectionHeading 
            heading = "We offer the best Technology Solutions"
            isHeadingCenter = {true}
          />

          <div className="form-instructions">
            <h4 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Careers at Linum Tech</h4>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Please fill in the necessary (*) marked fields</p>
          </div>

          <CareerForm />
        </div>
      </section>
    </React.Fragment>
  )
}
export default CareersFormDetail;