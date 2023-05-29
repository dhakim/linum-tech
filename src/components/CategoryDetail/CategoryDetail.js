import React from 'react';
import './CategoryDetail.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const CategoryDetail = () => {
  return(
    <React.Fragment>
      <section className="category-detail-section">
        <div className="container">
          <div className="content-row">
            <div className="description">
              <SectionHeading />
              <div className="description-text">
                <p>
                  The offshore and commercial marine market is harsh on hardware and apparatus. We have components that withstand weather, corrosion, extreme temperature and tough and challenging environments. We carry special range of Tools, HSE Kits and Testing Equipment to cater the requirements of Oil and Gas Industry. We are also specialized in providing all types of electronic components used in the onshore or offshore setup in Oil & Gas industry.
                </p>
              </div>
            </div>

            <div className="medias">
              
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default CategoryDetail;