import React, {useState, useEffect} from 'react';
import './Header.scss';
import emailIcon from '../../assets/images/email.svg';
import phoneIcon from '../../assets/images/mobile.svg';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 60);
    });
  }, []);

  return (
    <header className={`header ${scroll ? 'sticky' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="mailto:info@linumtech.com" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
              <img src={emailIcon} alt="Email" />
              <span>info@linumtech.com</span>
            </a>
            
            <a href="tel:+971547864447" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img src={phoneIcon} alt="Mobile" />
              <span>+971 54 786 4447</span>
            </a>
          </div>
        </div>
      </div>
    
      <div className="navigation-bar">
        <div className="container">
          <div className="logo" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          
          <Navigation />
        </div>
      </div>
    </header>
  )
}
export default Header;
