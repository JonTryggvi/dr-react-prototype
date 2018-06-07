import React, { Component } from 'react';
import YouTube from 'react-youtube';  
import './video.css';



class Video extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // This binding is necessary to make `this` work in the callback
    // this.filterClick = this.handleClick.bind(this);
    // console.log(this.state);

  }
  
  render() {

    // let iWorkTo = (message) => console.log(message);
    const  {sendToProgrammes}  = this.state;
    console.log(sendToProgrammes);
    if (sendToProgrammes.vids.length > 0) {
      localStorage.vidId = sendToProgrammes.vids[0].vid_id;
      var vidId = sendToProgrammes.vids[0].vid_id ? sendToProgrammes.vids[0].vid_id : localStorage.vidId;
      var vidTitle = sendToProgrammes.vids[0].title;
    }

    // console.log(vidId);
    
    const opts = {
      // height: '100%',
      // width: '100',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div className="vidSectionContainer">
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