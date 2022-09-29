import React from 'react';
import logo from '../../images/fitness-logo-vector-symbol-icon-260nw-1926906863.webp';
import './Header.css';
const Header = () => {
    return (
       <nav className='header'>
         <img src={logo} alt="" />
       </nav>
    );
};

export default Header;