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
              <div className="description-text">
                <p>{description}</p>
              </div>

              <img src={arrowsImg} alt="arrorws" />
            </div>

            <div className={`medias ${images.length > 1 ? 'media-width-multiple-images' : ''}`}>
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