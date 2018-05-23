import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (

      <nav className={this.state.isToggleOn ? 'sidebar-container' : 'sidebar-container-small'}>
        <div className="skjult-menu" onClick={this.handleClick}><span>{this.state.isToggleOn ? 'Skjult menu' : 'Åbne menu'}</span><img src={require('./images/closeMenu.png')} alt=""/></div>
        <div className={this.state.isToggleOn ? 'showContent' : 'hideContent'}>
          <div className="user-info">
            <img src={require('./images/user.png')} alt="user picture"/>
            <h2>Katrín Sigurðardóttir</h2>
            <div className="follow">
              <div className="follow-item">
                <p>following</p>
                <span className="followCount">56</span>
              </div>
              <div className="follow-item">
                <p>followers</p>
                <span className="followCount">128</span>
              </div>
            </div>
          </div>
          <div className="section">
            <h3>Library</h3>
            <ul className="section-list">
              <li><Link to="/kigger-pa-nu"><img src={require('./images/heart.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/heartYellow.svg')} alt="" className="hoverIcon"/>Kigger pa nu</Link></li>
              <li><Link to="/for-nylig-set"><img src={require('./images/heart.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/heartYellow.svg')} alt="" className="hoverIcon"/>For nylig set</Link></li>
              <li><Link to="/anbefalet"><img src={require('./images/heart.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/heartYellow.svg')} alt="" className="hoverIcon"/>Anbefalet</Link></li>
              <li><Link to="/nye-trailere"><img src={require('./images/heart.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/heartYellow.svg')} alt="" className="hoverIcon"/>Nye trailere</Link></li>
              <li><Link to="/kommer-snart"><img src={require('./images/heart.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/heartYellow.svg')} alt="" className="hoverIcon"/>Kommer snart</Link></li>
            </ul>
          </div>
          <div className="section">
            <h3>Collections</h3>
            <ul className="section-list">
              <li><Link to="/kigger-pa-nu"><img src={require('./images/star.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/starYellow.svg')} alt="" className="hoverIcon"/>Favorit</Link></li>
              <li><Link to="/for-nylig-set"><img src={require('./images/star.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/starYellow.svg')} alt="" className="hoverIcon"/>Olden goldies</Link></li>
              <li><Link to="/anbefalet"><img src={require('./images/star.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/starYellow.svg')} alt="" className="hoverIcon"/>Chick Flicks</Link></li>
              <li><Link to="/nye-trailere"><img src={require('./images/star.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/starYellow.svg')} alt="" className="hoverIcon"/>Splatter films</Link></li>
              <li><Link to="/kommer-snart"><img src={require('./images/star.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/starYellow.svg')} alt="" className="hoverIcon"/>Anjas beste</Link></li>
              <li><Link to="/kommer-snart"><img src={require('./images/star.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/starYellow.svg')} alt="" className="hoverIcon"/>Lars Von Trier</Link></li>
            </ul>
          </div>
          <div className="ny">
          <img src={require('./images/add.png')} alt=""/>
          <p>Ny collection</p>
          </div>
          <div className="section">
            <h3>Your Account</h3>
            <ul className="section-list">
              <li><Link to="/kigger-pa-nu"><img src={require('./images/profile.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/profileWhite.svg')} alt="" className="hoverIcon"/>Min profile</Link></li>
              <li><Link to="/for-nylig-set"><img src={require('./images/settings.svg')} alt="" className="sidebarIcon"/> <img src={require('./images/settingsWhite.svg')} alt="" className="hoverIcon"/>Settings</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Sidebar;