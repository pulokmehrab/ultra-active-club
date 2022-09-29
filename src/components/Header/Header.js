import React from 'react';
import logo from '../../images/fitness-logo-vector-symbol-icon-260nw-1926906863.webp';
import './Header.css';
const Header = () => {
    return (
       <nav className='header d-flex'>
         <div><img src={logo} alt="" /></div>
         <div><h2>Fitness club</h2></div>
       </nav>
    );
};

export default Header;