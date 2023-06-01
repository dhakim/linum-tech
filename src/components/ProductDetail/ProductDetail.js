import React from 'react';
import './ProductDetail.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import dottedTriangle from '../../assets/images/triangle-dotted-mask.svg';

const ProductDetail = ({
  heading, 
  description,
}) => {
  return(
    <React.Fragment>
      <section className="product-detail-section">
        <div className="bg-dotted-triangle">
          <img src={dottedTriangle} alt="triable" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
        </div>
        <div className="container">
          <SectionHeading 
            heading = {heading}
            isHeadingCenter = {true}
          />

          <div className="description" data-aos="up" data-aos-delay="200" data-aos-duration="1000"><div><p style={{whiteSpace: "pre-line"}}>{ description }</p></div> </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default ProductDetail;