import React from 'react';
import './HeroSlider.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../assets/images/slides/slide-1.jpg';

const HeroSlider = () => {
  return(
    <React.Fragment>
      <div className="hero-section">
        <Carousel 
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          className="hero-slider"
        >
          <div>
              <img src={slide1} alt="slide" />
          </div>
          <div>
              <img src={slide1} alt="slide" />
          </div>
          <div>
              <img src={slide1} alt="slide" />
          </div>
        </Carousel>

        <div className="hero-title" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <div className="title-content">
            <h1>Sole Partner for <span>Distrelec</span></h1>
            <a href="https://www.distrelec.biz/" target="_blank" rel="noreferrer">www.distrelec.biz</a>
            <p>your Gateway to Technology</p>
          </div>
        </div>
      </div>

        
    </React.Fragment>
  )
}
export default HeroSlider;