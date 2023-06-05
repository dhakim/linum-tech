import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoArcIcon from '../../assets/images/logo-arc.svg';
import navListItems from './NavListItems';
import hamburgerIcon from '../../assets/images/hamburger.svg';
import logo from '../../assets/images/logo.svg';

const Navigation = () => {
  const [navMobile, setNavMobile] = useState(false);
  const scrollToTop = () => {
    console.log('asf');
  }
  return (
    <div className="navigation">
      <div className="hamburger" onClick={() => setNavMobile(!navMobile)}>
        <img src={hamburgerIcon} alt="hamburger" />
      </div>
      <ul className={`menu ${navMobile ? 'mobile-menu' : ''}`}>
        <div className="mobile-logo"><img src={logo} alt="logo" /></div>
        {
          navListItems.map((item, index) => (
            <li key={index} className={item.class} data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <Link to={item.url}>{item.navItem}</Link>

              {
                item.subMenu ? (
                  <ul className="submenu">
                    {
                      item.subMenu.map((subItem, subItemIndex) => (
                        <li className={subItemIndex} key={subItemIndex}>
                          <Link to={subItem.url} onClick={scrollToTop}>
                            <img src={logoArcIcon} alt="icon" /> {subItem.navItem}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                ) : ('')
                
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Navigation;
