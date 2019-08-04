import React from 'react';
import './Song.css';
function Song(props) {
  const { name, artist, length, selectSong, remove } = props;
  return (
    <li className='list-group-item song'>
      <button className='btn btn-info add' onClick={() => selectSong(name)}>
        play
      </button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => remove(name)}
      >
        Remove
      </button>
      <span ClassName='Adding'>Name : {name}</span>
      <span ClassName='Adding'>artist: {artist}</span>
      <span className='m-0'>length: {length}</span>
    </li>
  );
}

export default Song;
