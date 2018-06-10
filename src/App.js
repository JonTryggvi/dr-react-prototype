import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './vars.css';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Filters from './components/filters/filters';
import Sidebar from './components/sidebar/sidebar';
import Home from './containers/home/home';
import Programmes from './containers/programmes/programmes';
import Programme from './containers/programme/programme';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { // seting the default state of the application
      hits: [], // setup an array for containing data from our database
      isToggleOn: false // set initial state for the filter dropdown
    };
    this.headerSpyglassClick = this.headerClick.bind(this); // bind 'this' to the function headerClick and store it in a variable so we can pass it to the corresponding component 'Filter' namely
    this.filterclose = this.filterClick.bind(this); // same as above but for a different button in a differnt component
  }
  // a function that toggles the state
  headerClick() {
    // console.log(dataFromChild);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  // agin the same funcionality as in the headerClick but in different component. Guess what component! ;)
  filterClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  // is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. https://reactjs.org/docs/react-component.html
  componentDidMount() {
    // here we make use of the fetch method to call our API for the database. The fetch method is a promise based method and has the great plus side that it doesnt provoke a CORS action from the browser. It also makes a cleaner more readable code instead of the calback hell that can occour
    fetch('http://localhost:1981/api/trailer/1', {
      method: 'GET', headers: {
        'Accept': 'application/json'
      }
    }).then(data => {
        if (data.ok) {
          data.json().then(json => {
            this.setState({ hits: json })
          })
        }
      });
    } 
    
  render() { 
    return (
      // here we scaffold the our application for the DOM. 
      <div className="app-container">
        {/* in the header we set the attribute callbackFromParent and set it equal to our headerclickfuntion this means that the callbackFromParent will be accessablein the Header Component */}
        <Header callbackFromParent={this.headerSpyglassClick} sendToFilter={this.state.isToggleOn}/>
        <div className="theFilter">
          {/* The same here we are setting attributes here that will be accessable in the relative component in this case send to filter sends the state and the closeFromFilter. The attribute sendToFilter sends the state but the closeFromFilter attribute is receiving a boolean from the Filter component */}
          <Filters sendToFilter={this.state} closeFromFilter={ this.filterclose } />
        </div>  
        <div className="view-container">
          
          <Sidebar />
          {/* the Switch is imported from the react-router-dom module and with it we can create a path and link it to a component. Note that we can also send data to the component in a function that executes when a route is selected eg.a the Programme Route */}
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
