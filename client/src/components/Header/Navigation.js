import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoArcIcon from '../../assets/images/logo-arc.svg';
import navListItems from './NavListItems';
import hamburgerIcon from '../../assets/images/hamburger.svg';
import logo from '../../assets/images/logo.svg';

const Navigation = () => {
  const [navMobile, setNavMobile] = useState(false);
  const navigate = useNavigate();

  const navigateToPage = (url) => {
    navigate(url);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
              <span onClick={() => navigateToPage(item.url)}>{item.navItem}</span>
              {/* <Link to={item.url}>{item.navItem}</Link> */}

              {
                item.subMenu ? (
                  <ul className="submenu">
                    {
                      item.subMenu.map((subItem, subItemIndex) => (
                        <li className={subItemIndex} key={subItemIndex}>
                          <span onClick={() => navigateToPage(subItem.url)}>
                            <img src={logoArcIcon} alt="icon" /> {subItem.navItem}
                          </span>
                        </li>
                      ))
                    }
                  </ul>
                ) : ('')
                
              }
            </li>
          ))
        }
        <li className="button">
          <a href="https://www.distrelec.biz" target='_blank' rel="noreferrer">Distrelec</a>
        </li>
      </ul>
    </div>
  )
}
export default Navigation;
