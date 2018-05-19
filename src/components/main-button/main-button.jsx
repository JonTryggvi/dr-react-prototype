import React, { Component } from 'react';
import './main-button.css';
class MainButton extends Component {

  render() {
   
    const { onPress, buttonText } = this.props;
  
    return (
      <button onClick={onPress}>{buttonText}</button>
    )
  }
}


export default MainButton;