import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    /* here we have this wonderful deconstructing syntax again as described in the filter component */
    const { callbackFromParent, sendToFilter } = this.props;
    
    return (
      <header>
        <div className="header-inner">
          <Link className="logo-link" to="/"> <img src={require('./drTvLogo.png')} alt=""/> </Link>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link className="testProgrammes" to="/programmes/">programmes</Link></li>
              <li><Link to="/">Live-TV</Link></li>
              <li><Link to="/">TV-Guide</Link></li>
              <li><Link to="/">Nyt</Link></li>
              <li><Link to="/">Populært</Link></li>
              <li className="btn-log-ud"><Link to="/log-ud">Log ud</Link></li>
              {/*  here we are wer are doing the same as in the Filter. we are calling a funciton in the app component switching the isToggled key from true to false */ }
              <li className={sendToFilter ? 'btn-log-search btnActive' : 'btn-log-search' } onClick={() => callbackFromParent()}><a><img src={sendToFilter ? require('./cancel.svg') : require('./search.svg')} alt=""/></a></li>
            </ul>
          </nav>
        </div>  
      </header>
    )
  }
}

export default Header;