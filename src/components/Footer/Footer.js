import React from "react";
import './Footer.scss';
import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/images/social-media/fb.svg';
import instagramIcon from '../../assets/images/social-media/insta.svg';
import twitterIcon from '../../assets/images/social-media/twitter.svg';
import youtubeIcon from '../../assets/images/social-media/youtube.svg';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="copyrights" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              Copyrights {new Date().getFullYear()} © <Link to="/">www.linumtech.com</Link>
            </div>

            <div className="social-medias">
              <a href="#"><img src={facebookIcon} alt="fb" /></a>
              <a href="#"><img src={instagramIcon} alt="instagram" /></a>
              <a href="#"><img src={twitterIcon} alt="twitter" /></a>
              <a href="#"><img src={youtubeIcon} alt="youtube" /></a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
export default Footer;