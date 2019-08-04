import React from 'react';
import './AudioPlayer.css';
function AudioPlayer({ currentlyPlaying }) {
  return <audio controls src={currentlyPlaying} />;
}

export default AudioPlayer;
