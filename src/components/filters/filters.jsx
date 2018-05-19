import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nouislider from 'react-nouislider';
import './filters.css';
import MainButton from '../../components/main-button/main-button';
class Filters extends Component {
  render() {
   
    return (
      <div className="filter">
        <div className="firstSection">
          <h2>Find dit program!</h2>
          <span><input type="text" placeholder="What are you looking for…"/><img src={require('./images/search.svg')} alt=""/></span>
        </div>
        <div className="secoundSection">
            <div>
              <h3>Sorter erfter</h3>
              <ul className="section-list">
                <li><Link to="/navn">Navn</Link></li>
                <li><Link to="/ratings">Ratings</Link></li>
                <li><Link to="/udgivelsesdato">Udgivelsesdato</Link></li>
                <li><Link to="/my-dr-tv-bedommelse">My DR TV  bedømmelse</Link></li>
              </ul>
            </div>
            <div>
              <h3>Genre</h3>
              <div className="row">
                <div className="column">
                  <label htmlFor="drama"><input type="checkbox" name="drama" value="drama" /> Drama</label>
                  <label htmlFor="documentar"><input type="checkbox" name="documentar" value="documentar" /> Documentar</label>
                  <label htmlFor="kultur"><input type="checkbox" name="kultur" value="kultur" /> Kultur</label>
                  <label htmlFor="natur-viden"><input type="checkbox" name="natur-viden" value="natur-viden" /> Natur & viden</label>
                  <label htmlFor="nyheder-aktualitet"><input type="checkbox" name="nyheder-aktualitet" value="nyheder-aktualitet" /> Nyheder & aktualitet</label>
                  <label htmlFor="sport"><input type="checkbox" name="sport" value="sport" /> Sport</label>
                  <label htmlFor="underholdning"><input type="checkbox" name="underholdning" value="underholdning" /> Underholdning</label>
                </div>
                <div className="column">
                  <label htmlFor="drama"><input type="checkbox" name="romance" value="romance" /> Romance</label>
                  <label htmlFor="documentar"><input type="checkbox" name="action" value="action" /> Action</label>
                  <label htmlFor="kultur"><input type="checkbox" name="family" value="family" /> Family</label>
                  <label htmlFor="natur-viden"><input type="checkbox" name="comedie" value="comedie" /> Comedie</label>
                  <label htmlFor="nyheder-aktualitet"><input type="checkbox" name="nyheder-aktualitet" value="sci-fi-fantasy" /> Sci-Fi & Fantasy</label>
                  <label htmlFor="sport"><input type="checkbox" name="thrillers" value="thrillers" /> Thrillers</label>
                  <label htmlFor="underholdning"><input type="checkbox" name="musicals" value="musicals" /> Musicals</label>
                </div>
              </div>
            </div>
            <div>
              <h3>Kanal</h3>
              <div className="column">
                <label htmlFor="drama"><input type="checkbox" name="dr1" value="dr1" /> DR 1</label>
                <label htmlFor="documentar"><input type="checkbox" name="dr2" value="dr2" /> DR 2</label>
                <label htmlFor="kultur"><input type="checkbox" name="dr3" value="dr3" /> DR 3</label>
                <label htmlFor="natur-viden"><input type="checkbox" name="drk" value="drk" /> DR K</label>
                <label htmlFor="nyheder-aktualitet"><input type="checkbox" name="ramasjang" value="ramasjang" /> Ramasjang</label>
                <label htmlFor="sport"><input type="checkbox" name="ultra" value="ultra" /> Ultra</label>
              </div>
            </div>
            <div className="column type-unsertext">
              <div className="row">
                <div>
                  <h3>Type</h3>
                  <div className="column">
                    <label htmlFor="drama"><input type="checkbox" name="romance" value="romance" /> Romance</label>
                    <label htmlFor="documentar"><input type="checkbox" name="action" value="action" /> Action</label>
                  </div>
                </div>
                <div>
                  <h3>Undertext</h3>
                  <div className="column">
                    <label htmlFor="drama"><input type="checkbox" name="ja" value="ja" /> Ja</label>
                    <label htmlFor="documentar"><input type="checkbox" name="nej" value="nej" /> Nej</label>
                  </div>
                </div>
              </div>
              <div>
                <h3>År</h3>
                <Nouislider
                  range={{min: 0, max: 200}}
                  start={[0, 100]}
                  tooltips
                />
              </div>
            </div>
            
          
        </div>
        <MainButton  buttonText={'Find nu'} />
      </div>      

    )
  }
}

export default Filters;