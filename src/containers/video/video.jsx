import React from 'react';
import { Link, Route } from 'react-router-dom';
import MainButton from '../../components/main-button/main-button';
import './video.css';
const Video = ({ match }) => {
  const testfunction = () => console.log('this is a test btn');
  return (
    <div className="video-container">
      <h1>Video</h1>
      <MainButton onPress={testfunction} children={'text'} />
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