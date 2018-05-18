import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
class Sidebar extends Component {
  render() {
    return (

      <nav className="sidebar-container">
        <Link to="/" className="skjult-menu">Skjult menu<img src={require('./closeMenu.png')} alt=""/></Link>
        <div className="user-info">
          <img src={require('./user.png')} alt="user picture"/>
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
            <li><Link to="/kigger-pa-nu"><img src={require('./heart.svg')} alt=""/> Kigger pa nu</Link></li>
            <li><Link to="/for-nylig-set"><img src={require('./heart.svg')} alt=""/> For nylig set</Link></li>
            <li><Link to="/anbefalet"><img src={require('./heart.svg')} alt=""/> Anbefalet</Link></li>
            <li className="sectionActive"><Link to="/nye-trailere"><img src={require('./heartYellow.svg')} alt=""/> Nye trailere</Link></li>
            <li><Link to="/kommer-snart"><img src={require('./heart.svg')} alt=""/> Kommer snart</Link></li>
          </ul>
        </div>
        <div className="section">
          <h3>Collections</h3>
          <ul className="section-list">
            <li><Link to="/kigger-pa-nu"><img src={require('./star.svg')} alt=""/> Favorit</Link></li>
            <li><Link to="/for-nylig-set"><img src={require('./star.svg')} alt=""/> Olden goldies</Link></li>
            <li><Link to="/anbefalet"><img src={require('./star.svg')} alt=""/> Chick Flicks</Link></li>
            <li><Link to="/nye-trailere"><img src={require('./star.svg')} alt=""/>Splatter films</Link></li>
            <li><Link to="/kommer-snart"><img src={require('./star.svg')} alt=""/> Anjas beste</Link></li>
            <li><Link to="/kommer-snart"><img src={require('./star.svg')} alt=""/> Lars Von Trier</Link></li>
          </ul>
        </div>
        <div className="ny">
        <img src={require('./add.png')} alt=""/>
        <p>Ny collection</p>
        </div>
        <div className="section">
          <h3>Your Account</h3>
          <ul className="section-list">
            <li><Link to="/kigger-pa-nu"><img src={require('./profile.svg')} alt=""/> Min profile</Link></li>
            <li><Link to="/for-nylig-set"><img src={require('./settings.svg')} alt=""/> Settings</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Sidebar;