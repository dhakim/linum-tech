import React from 'react';
import './CategoryDetail.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import arrowsImg from '../../assets/images/arrows-line.svg';

const CategoryDetail = ({heading, description, images}) => {
  return(
    <React.Fragment>
      <section className="category-detail-section">
        <div className="container">
          <div className="content-row">
            <div className="description">
              <SectionHeading heading={heading} />
              <div className="description-text" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <p>{description}</p>
              </div>

              <img src={arrowsImg} alt="arrorws" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" />
            </div>

            <div className={`medias ${images.length > 1 ? 'media-width-multiple-images' : ''}`} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
              <div className={`media-wrapper ${images.length > 1 ? 'multiple' : ''}`}>
                {
                  images.map((item) => (
                    <div className="img-holder">
                      <img src={item} alt="image" />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default CategoryDetail;