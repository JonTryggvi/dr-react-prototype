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


  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isToggleOn: false
    };
    this.headerSpyglassClick = this.headerClick.bind(this);
    this.filterclose = this.filterClick.bind(this);
  }

   headerClick() {
      // console.log(dataFromChild);
     this.setState(prevState => ({
       isToggleOn: !prevState.isToggleOn
     }));

   }
  filterClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


 
  componentDidMount() {
    fetch('http://localhost:1981/api/trailer/1', {
      method: 'GET', headers: {
        'Accept': 'application/json'
      }
    }).then(data => {
        if (data.ok) {
          data.json().then(json => {
            console.log(json);
            
            this.setState({ hits: json })
          })
        }
      });
    } 
    
   

  render() {
    
    return (
      <div className="app-container">
        <Header callbackFromParent={this.headerSpyglassClick} />
        <div className="theFilter">
          <Filters sendToFilter={this.state} closeFromFilter={ this.filterclose} />
        </div>
        
        <div className="view-container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/programmes" component={Programmes} />
            <Route exact path="/programme" component={() => <Programme vids={this.state.hits} />} />
           
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
