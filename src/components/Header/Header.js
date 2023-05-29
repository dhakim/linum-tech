import React from 'react';
import './Header.scss';
import emailIcon from '../../assets/images/email.svg';
import phoneIcon from '../../assets/images/mobile.svg';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="mailto:info@linumtech.com">
              <img src={emailIcon} alt="Email" />
              info@linumtech.com
            </a>
            
            <a href="tell:+971547864447">
              <img src={phoneIcon} alt="Mobile" />
              +971 54 786 4447
            </a>
          </div>
        </div>
      </div>
    
      <div className="navigation-bar">
        <div className="container">
          <div className="logo">
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
