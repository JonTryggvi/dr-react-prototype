import React, { Component } from 'react';
import MainButton from '../../components/main-button/main-button';
import { Link } from 'react-router-dom';
import './programmes.css';

class Programmes extends Component {
  render() {
    let iWorkTo = (message) => console.log(message);
    return (
      <div className="programmes-container">
      <Link to="/programme"><img src={require('./images/screenContent2.jpg')} alt=""/></Link>
        {/* <MainButton onPress={() => iWorkTo('i work as well')} buttonText={'This is my home button'} /> */}
      </div>
    )
  }
}

export default Programmes;
