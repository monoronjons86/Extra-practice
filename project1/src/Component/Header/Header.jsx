import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt="" />
          <div>
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Inventory">Inventory</a>
            <a href="/Login">Login</a>
          </div>
        </div>
    );
};

export default Header;