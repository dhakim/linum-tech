import React from 'react';
import './ProductDetail.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const ProductDetail = ({
  heading, 
  description,
}) => {
  return(
    <React.Fragment>
      <section className="product-detail-section">
        <div className="container">
          <SectionHeading 
            heading = {heading}
            isHeadingCenter = {true}
          />

          <div className="description">{description}</div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default ProductDetail;