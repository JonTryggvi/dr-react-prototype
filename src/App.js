import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Filters from './components/filters/filters';
import Sidebar from './components/sidebar/sidebar';
import Home from './containers/home/home';
import Programmes from './containers/programmes/programmes';
import Programme from './containers/programme/programme';
import Video from './containers/video/video';

class App extends Component {
  
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="theFilter"><Filters /></div>
        
        <div className="view-container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/programmes" component={Programmes} />
            <Route exact path="/programme" component={Programme} />
            <Route path="/video" component={Video} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
