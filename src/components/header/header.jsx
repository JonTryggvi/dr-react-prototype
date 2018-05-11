import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-inner">
          <Link to="/">LOGO</Link>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/video">Video</Link></li>
            </ul>
          </nav>
        </div>  
      </header>
      
    )
  }
}


export default Header;