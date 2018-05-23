import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    const { callbackFromParent } = this.props;
    // console.log(this.props);
    
    return (
      <header>
        <div className="header-inner">
          <Link className="logo-link" to="/"> <img src={require('./drTvLogo.png')} alt=""/> </Link>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link to="/programmes">programmes</Link></li>
              <li><Link to="/">Live-TV</Link></li>
              <li><Link to="/">TV-Guide</Link></li>
              <li><Link to="/">Nyt</Link></li>
              <li><Link to="/">Populært</Link></li>
              <li className="btn-log-ud"><Link to="/log-ud">Log ud</Link></li>
              <li className="btn-log-search" onClick={() => callbackFromParent(true)}><a><img src={require('./search.svg')} alt=""/></a></li>
            </ul>
          </nav>
        </div>  
      </header>
    )
  }
}

export default Header;