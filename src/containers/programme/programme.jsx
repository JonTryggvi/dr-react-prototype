import React, { Component } from 'react';
import MainButton from '../../components/main-button/main-button';
import './programme.css';

class Programme extends Component {
  render() {
    let iWorkTo = (message) => console.log(message);
    return (
      <div className="programme-container">
        <img src={require('./images/screenContent3.jpg')} alt=""/>
        {/* <MainButton onPress={() => iWorkTo('i work as well')} buttonText={'This is my home button'} /> */}
      </div>
    )
  }
}

export default Programme;
