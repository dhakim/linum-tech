const NavListItems = [
  {
    navItem: 'Home',
    url: '/',
    isHashTag: false,
  },
  {
    navItem: 'Industries',
    class: 'has-submenu',
    subMenu: [
      {
        navItem: 'Oil and Gas',
        url: '/industries/oil-and-gas'
      },
      {
        navItem: 'Construction',
        url: '/industries/construction'
      },
      {
        navItem: 'Education',
        url: '/industries/education'
      },
      {
        navItem: 'Utilities',
        url: '/industries/utilities-and-grid'
      },
      {
        navItem: 'Defence',
        url: '/industries/defence'
      },
      {
        navItem: 'Transportation',
        url: '/industries/transportation'
      },
    ]
  },
  {
    navItem: 'Products',
    class: 'has-submenu',
    subMenu: [
      {
        navItem: 'Electronic Components',
        url: '/products/electronic-components'
      },
      {
        navItem: 'Connectors',
        url: '/products/connectors'
      },
      {
        navItem: 'Cables & Wires',
        url: '/products/cables-and-wires'
      },
      {
        navItem: 'Test Equipment',
        url: '/products/test-equipment'
      },
      {
        navItem: 'Automation',
        url: '/products/automation'
      },
      {
        navItem: 'Maintenance Safety & ESD',
        url: '/products/maintenance-safety-and-esd'
      },
      {
        navItem: 'Tools & Soldering',
        url: '/products/tools-and-soldering'
      },
      {
        navItem: 'Thermal Management',
        url: '/products/thermal-management'
      },
      {
        navItem: 'Mechanical Components',
        url: '/products/mechanical-components'
      },
      {
        navItem: 'Power',
        url: '/products/power'
      },
      {
        navItem: 'Development Boards & Kits',
        url: '/products/development-boards-and-kits'
      },
    ]
  },
  {
    navItem: 'Our Strength',
    url: '/home#our_strength',
    isHashTag: true
  },
  {
    navItem: 'Careers',
    url: '/careers',
    isHashTag: false,
  },
  {
    navItem: 'Contact Us',
    url: '/contact',
    isHashTag: false,
  },
]
export default NavListItems;