import React, { Component } from 'react';
import YouTube from 'react-youtube';  
import './video.css';



class Video extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  
  render() {
    // let iWorkTo = (message) => console.log(message);
    // deconstructing syntax as describedin the filter component
    const {sendToProgrammes}  = this.state;

    /* we check for the length of the vids array. because of a deleay contacting our db service we first get an empyt array and it was causing errors beause every thing is undefined and the app would crash. The if statement secures that we can set our variables when we are ready to work with the data. */
    if (sendToProgrammes.vids.length > 0) {
      localStorage.vidId = sendToProgrammes.vids[0].vid_id;
      var vidId = sendToProgrammes.vids[0].vid_id ? sendToProgrammes.vids[0].vid_id : localStorage.vidId;
      var vidTitle = sendToProgrammes.vids[0].title;
    }
    // console.log(vidId);
    
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div className="vidSectionContainer">
        {/* We installed an npm module for embedding youtube videos  */}
        <YouTube videoId={vidId} opts={opts} onReady={this._onReady}  />
        <h1>{vidTitle}</h1>
      </div>
          
    )
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}



export default Video; 