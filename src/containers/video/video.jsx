import React from 'react';
import { Link, Route } from 'react-router-dom';
import MainButton from '../../components/main-button/main-button';
import './video.css';




const Video = ({ match, dataFromApp }) => {
  // console.log(match);
  let arr = [];
 let tst = fetch('http://localhost:1981/api/trailer/1', {
    method: 'GET', headers: {
      'Accept': 'application/json'

    }
  }).then(data => {
    if (data.ok) {
      return data.json().then(json => {
        
        arr = [... json]
       return
      })
     
    }
   });
  console.log(tst);
  
  
  let btnOnClickFunction = function(message) {
    console.log(message);
    
  }
  
  
   
  return (
    <div className="video-container">
      <h1>Video</h1>

      <MainButton onPress={() => btnOnClickFunction('i work')} buttonText={'This is my button'} />


      <ul>

        <li><Link to={`${match.url}/someVid1`}>vid 1</Link></li>
        <li><Link to={`${match.url}/someVid2`}>vid 2</Link></li>
        <li><Link to={`${match.url}/someVid3`}>vid 3</Link></li>

      </ul>
        <Route path={`${match.path}/:name`} render={({ match }) => (<div> <h3> {match.params.name} </h3></div>)} />
    </div>
  )
}


export default Video; 