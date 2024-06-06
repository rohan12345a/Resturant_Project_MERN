// import React, { useEffect, useState } from 'react'
// import './NavBar.css'
// import logo from '../../assets/logo04.png';
// import { Link } from 'react-scroll'

// const NavBar = () => {

//   const [sticky, setSticky] = useState(false);

//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       window.scrollY > 100 ? setSticky(true) : setSticky(false);
//     })
//   }, []);
//   return (
//     <nav className={`container ${sticky? 'dark-nav': ''}`}>
//       <img src={logo} alt="" className='logo' /> 
//       <ul>
//       <li><Link to='hero'smooth={true} offset={0} duration={500}>Home</Link></li>
//       <li><Link to='programs'smooth={true} offset={-260} duration={500}>Services</Link></li>
//       <li><Link to='about'smooth={true} offset={-150} duration={500}>About us</Link></li>
//       <li><Link to='Menu'smooth={true} offset={-260} duration={500}>Menu</Link></li> 
//        <li><Link to='Testimonials'smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
//        <li><Link to='reservation'smooth={true} offset={-260} duration={500}>Reservation</Link></li>
//        <li><Link to='contact'smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
// </ul>
//     </nav>
//   )
// }

// export default NavBar

import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo04.png';
import { Link } from 'react-scroll';

const NavBar = ({ onLogout }) => { // Pass onLogout function as a prop
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='Menu' smooth={true} offset={-260} duration={500}>Menu</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='reservation' smooth={true} offset={-260} duration={500}>Reservation</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        <li><button onClick={onLogout} className='btn'>Logout</button></li> {/* Add logout button */}
      </ul>
    </nav>
  );
}

export default NavBar;

