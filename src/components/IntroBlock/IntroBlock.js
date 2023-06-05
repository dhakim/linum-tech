import React from "react";
import './IntroBlock.scss';
import IntroBlockData from './IntroBlockData';

const IntroBlock  = () => {
  return (
    <React.Fragment>
      <section className="intro-block">
        <div className="container">
          <div className="content-wrapper">
            {
              IntroBlockData.map((item, key)=>(
                <div className={`card ${item.color}`} key={key} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <img src={item.icon} alt={item.heading} />
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default IntroBlock;