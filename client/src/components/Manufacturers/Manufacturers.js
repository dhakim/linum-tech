import React from 'react';
import './Manufacturers.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const Manufacturers = ({
  heading, 
  ManufacturersList
  
}) => {
  if(Object.keys(ManufacturersList).length > 0){
    return(
      <React.Fragment>
        <section className="manufacturer-section">
          <div className="container">
            <SectionHeading 
              heading = {heading}
              isHeadingCenter = {true}
              classname="d-none"
            />

            <ul className="manufacturer-list">
              {
                ManufacturersList.map((item, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    {
                      item.logo ? (
                        <span className="manufacture-logo">
                          <img src={item.logo} alt="arrow icon" />
                        </span>
                      ) : ('')
                    }
                    
                    <span className="label">{item.comp}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
export default Manufacturers;