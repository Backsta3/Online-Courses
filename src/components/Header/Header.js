import React from 'react';


import './Header.css';


const Header = () => {
    return (
        <div className="header">
            
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-around">
      <div>
        <h1>ⒹⓇⒺⒶⓂ ⓉⒺⒶⓂ</h1>
            </div>
          <div>
          <a href="/shop" className="link">Reload Page</a>
          </div>
       </nav>
      </div>
        </div>
    );
};

export default Header;