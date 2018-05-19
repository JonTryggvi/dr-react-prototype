import React, { Component } from 'react';
import MainButton from '../../components/main-button/main-button';
import './home.css';

class Home extends Component {
  render() {
    let iWorkTo = (message) => console.log(message);
    return (
      <div className="home-container">
        <h2>Home</h2>
        <MainButton onPress={() => iWorkTo('i work as well')} buttonText={'This is my home button'} />
      </div>
    )
  }
}

export default Home;
