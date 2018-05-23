import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="logo-search">
          <img src={require('./images/footerLogo.png')} alt=""/>
          <span><input type="text" placeholder="Hvad leder du efter…"/><img src={require('./images/search.svg')} alt=""/></span>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="aboutDr">dr</h3>
            <ul className="section-list">
              <li>Emil Holms Kanal 20</li>
              <li>0999 København C</li>
              <li>Tlf. 35 20 30 40</li>
              <li><Link to="/nye-trailere" className="contact">Kontakt</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Nyheder</h3>
            <ul className="section-list">
              <li><Link to="/nyhedsoverblikket">Nyhedsoverblikket</Link></li>
              <li><Link to="/regionale-nyheder">Regionale Nyheder</Link></li>
              <li><Link to="/sport">Sport</Link></li>
              <li><Link to="/vejret">Vejret</Link></li>
              <li><Link to="/tekst-tv">Tekst-tv</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Tv & Radio</h3>
            <ul className="section-list">
              <li><Link to="/tv-oversigten">TV-oversigten</Link></li>
              <li><Link to="/tv-programmer">TV-programmer</Link></li>
              <li><Link to="/se-live-tv" className="liIcon"><img src={require('./images/liveTv.svg')} alt=""/>Se live TV</Link></li>
              <li><Link to="/born">Børn</Link></li>
              <li><Link to="/Hor-radio" className="liIcon"><img src={require('./images/radio.svg')} alt=""/>Hør radio</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="section-list">
              <li><Link to="/apps">Apps</Link></li>
              <li><Link to="/tilgaengelighed">Tilgængelighed</Link></li>
              <li><Link to="/dr-pa-sociale-medier">DR på Sociale medier</Link></li>
              <li><Link to="/nyhedsbreve">Nyhedsbreve</Link></li>
              <li><Link to="/hjalp">Hjælp</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Om dr</h3>
            <ul className="section-list">
              <li><Link to="/nyt-fra-dr">Nyt fra DR</Link></li>
              <li><Link to="/licens">Licens</Link></li>
              <li><Link to="/job-i-dr">Job i DR</Link></li>
              <li><Link to="/presse">Presse</Link></li>
              <li><Link to="/vilkar-pa-dr">Vilkår på dr.dk</Link></li>
            </ul>
          </div>
        </div> 
      </footer>
    )
  }
}


export default Footer;