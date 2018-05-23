import React, { Component } from 'react';
import MainButton from '../../components/main-button/main-button';
import './programme.css';

class Programme extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // This binding is necessary to make `this` work in the callback
    // this.filterClick = this.handleClick.bind(this);
  }
  render() {
    let iWorkTo = (message) => console.log(message);
    return (
      <div className="programme-container">
        <img src={require('./images/screenContent3.jpg')} alt=""/>
      
      </div>
    )
  }
}

export default Programme;
