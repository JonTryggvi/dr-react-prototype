import React, { Component } from 'react';
import Video from '../video/video';
// import MainButton from '../../components/main-button/main-button';
import './programme.css';

import { Link } from 'react-router-dom';


class Programme extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // This binding is necessary to make `this` work in the callback
    // this.filterClick = this.handleClick.bind(this);
    // console.log(this.state);
    
  }
  render() {
    // let iWorkTo = (message) => console.log(message);
    
    // console.log(this.state);
    
    return (
      <div className="programme-container">
        <Video sendToProgrammes={this.state}/>
        <img src={require('./images/screenContent3.jpg')} alt=""/>
        
      </div>
    )
  }
}

export default Programme;
