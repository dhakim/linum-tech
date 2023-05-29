import React from "react";
import './IntroBlock.scss';
import IntroBlockData from './IntroBlockData';

const IntroBlock  = () => {
  console.log(IntroBlockData);
  return (
    <React.Fragment>
      <section className="intro-block">
        <div className="container">
          <div className="content-wrapper">
            {
              IntroBlockData.map((item)=>(
                <div className={`card ${item.color}`}>
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