import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    const { callbackFromParent } = this.props;
    console.log(this.props);
    
    return (
      <header>
        <div className="header-inner">
          <Link className="logo-link" to="/"> <img src={require('./drTvLogo.png')} alt=""/> </Link>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link to="/programmer">Programmer</Link></li>
              <li><Link to="/live-TV">Live-TV</Link></li>
              <li><Link to="/TV-Guide">TV-Guide</Link></li>
              <li><Link to="/nyt-hos-os">Nyt hos os</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li className="btn-log-ud"><Link to="/log-ud">Log ud</Link></li>
              <li onClick={() => callbackFromParent(true)}><a><img src={require('./search.svg')} alt=""/></a></li>
            </ul>
          </nav>
        </div>  
      </header>
    )
  }
}

export default Header;