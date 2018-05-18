import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
class Sidebar extends Component {
  render() {
    return (

      <nav className="sidebar-container">
        <Link to="/" className="skjult-menu">Skjult menu<img src={require('./images/closeMenu.png')} alt=""/></Link>
        <div className="user-info">
          <img src={require('./images/user.png')} alt="user picture"/>
          <h2>Katrín Sigurðardóttir</h2>
          <div className="follow">
            <div className="follow-item">
              <p>following</p>
              <strong>56</strong>
            </div>
            <div className="follow-item">
              <p>followers</p>
              <strong>128</strong>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Library</h3>
          <ul className="section-list">
            <li><Link to="/kigger-pa-nu"><img src={require('./images/heart.svg')} alt=""/> Kigger pa nu</Link></li>
            <li><Link to="/for-nylig-set"><img src={require('./images/heart.svg')} alt=""/> For nylig set</Link></li>
            <li><Link to="/anbefalet"><img src={require('./images/heart.svg')} alt=""/> Anbefalet</Link></li>
            <li className="sectionActive"><Link to="/nye-trailere"><img src={require('./images/heartYellow.svg')} alt=""/> Nye trailere</Link></li>
            <li><Link to="/kommer-snart"><img src={require('./images/heart.svg')} alt=""/> Kommer snart</Link></li>
          </ul>
        </div>
        <div className="section">
          <h3>Collections</h3>
          <ul className="section-list">
            <li><Link to="/kigger-pa-nu"><img src={require('./images/star.svg')} alt=""/> Favorit</Link></li>
            <li><Link to="/for-nylig-set"><img src={require('./images/star.svg')} alt=""/> Olden goldies</Link></li>
            <li><Link to="/anbefalet"><img src={require('./images/star.svg')} alt=""/> Chick Flicks</Link></li>
            <li><Link to="/nye-trailere"><img src={require('./images/star.svg')} alt=""/>Splatter films</Link></li>
            <li><Link to="/kommer-snart"><img src={require('./images/star.svg')} alt=""/> Anjas beste</Link></li>
            <li><Link to="/kommer-snart"><img src={require('./images/star.svg')} alt=""/> Lars Von Trier</Link></li>
          </ul>
        </div>
        <div className="ny">
        <img src={require('./images/add.png')} alt=""/>
        <p>Ny collection</p>
        </div>
        <div className="section">
          <h3>Your Account</h3>
          <ul className="section-list">
            <li><Link to="/kigger-pa-nu"><img src={require('./images/profile.svg')} alt=""/> Min profile</Link></li>
            <li><Link to="/for-nylig-set"><img src={require('./images/settings.svg')} alt=""/> Settings</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Sidebar;