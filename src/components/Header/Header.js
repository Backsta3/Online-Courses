import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
       <nav>
           <a href="/shop">Courses</a>
           <a href="/review">Ordered Courses</a>
           <a href="/manage">Inventory</a>
       </nav>
        </div>
    );
};

export default Header;