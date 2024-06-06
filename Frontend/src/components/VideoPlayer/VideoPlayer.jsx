import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/video1.mp4';

const VideoPlayer = (props) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      props.setPlayState(false);
    }
  };

  return (
    React.createElement('div', {
      className: `video-player ${props.playState ? '' : 'hide'}`,
      ref: player,
      onClick: closePlayer
    }, React.createElement('video', { src: video, autoPlay: true, muted: true, controls: true }))
  );
};

export default VideoPlayer;



