import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Home from './containers/home/home';
import Video from './containers/video/video';




/* Products component */
// const Sidebar = () => (
//   <div>
//     <h2>Sidebar</h2>
//   </div>
// )

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="view-container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/video" component={Video} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
