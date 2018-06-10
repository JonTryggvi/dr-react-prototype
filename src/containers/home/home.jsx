import React, { Component } from 'react';
import './home.css';

// console.log(htmlthing);
class Home extends Component {
  render() {   
    return (
      <div className="home-container">
        <img src={require('./images/screenContent1.jpg')} alt=""/>
      </div>
    )
  }
}

export default Home;
