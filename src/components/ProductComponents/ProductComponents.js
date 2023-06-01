import React from 'react';
import './ProductComponents.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import arrowBlueIcon from '../../assets/images/arrow-blue-icon.svg';

const ProductComponents = ({
  heading, 
  componentList
}) => {
  return(
    <React.Fragment>
      <section className="product-components">
        <div className="container">
          <SectionHeading 
            heading = {heading}
            isHeadingCenter = {true}
          />

          <ul className="components-list">
            {
              componentList.map((item) => (
                <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                  <img src={arrowBlueIcon} alt="arrow icon" width="24" />
                  <span>{item.comp}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
}
export default ProductComponents;