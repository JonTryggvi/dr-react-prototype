import React, { Component } from 'react';
import './main-button.css';
class MainButton extends Component {

  render() {
    const { onPress, children } = this.props
    return (
      <button onClick={onPress}>{children}</button>
    )
  }
}


export default MainButton;