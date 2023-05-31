import React from 'react';
import { Link } from 'react-router-dom';
import logoArcIcon from '../../assets/images/logo-arc.svg';
import navListItems from './NavListItems';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="menu">
        {
          navListItems.map((item, index) => (
            <li key={index} className={item.class} data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <Link to={item.url}>{item.navItem}</Link>

              {
                item.subMenu ? (
                  <ul className="submenu">
                    {
                      item.subMenu.map((subItem, subItemIndex) => (
                        <li className={subItemIndex}>
                          <Link to={subItem.url}>
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
