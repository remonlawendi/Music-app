import React from 'react';
import Song from './Song';
class SongList extends React.Component {
  render() {
    const { songs, selectSong, remove } = this.props;
    return (
      <ul className='list-group'>
        {songs.map(song => (
          <Song
            key={song.name}
            {...song}
            selectSong={selectSong}
            remove={remove}
          />
        ))}
      </ul>
    );
  }
}

export default SongList;
