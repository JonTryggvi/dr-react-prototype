import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './programmes.css';

class Programmes extends Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    // This binding is necessary to make `this` work in the callback
     

  }
  render() {
    const { senddata } = this.props;

    console.log(this.state);
    
    return (
      <div className="programmes-container">
      <Link to="/programme"><img src={require('./images/screenContent2.jpg')} alt=""/></Link>
        
      </div>
    )
  }
}

export default Programmes;
