import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
class Sidebar extends Component {
  render() {
    return (

      <nav className="sidebar-container">
      sidebar  
        <ul className="">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/video">Video</Link></li>
        </ul>
      </nav>
    )
  }
}


export default Sidebar;