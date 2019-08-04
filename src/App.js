import React from 'react';
import SongList from './component/SongList';
import AudioPlayer from './component/AudioPlayer';
import Search from './component/Search';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
class App extends React.Component {
  state = {
    songs: [],
    currentlyPlaying: null,
    playlist: [],
    searchTerm: ''
  };

  componentDidMount() {
    fetch('https://api.myjson.com/bins/hw8lz')
      .then(res => res.json())
      .then(({ tracks }) => this.setState({ songs: tracks }));
  }

  selectSong = songName => {
    const currentSong = this.state.songs.find(song => song.name === songName);
    this.setState({
      currentlyPlaying: currentSong.url
    });
  };

  addSong = song => {
    this.setState(
      state => ({
        playlist: [...state.playlist, song]
      }),
      () => console.log(this.state.playlist)
    );
  };

  removeSong = songName => {
    const newPlaylist = this.state.playlist.filter(
      song => song.name !== songName
    );
    this.setState({
      playlist: newPlaylist,
      currentlyPlaying: null
    });
  };

  render() {
    const { songs, currentlyPlaying, playlist } = this.state;
    return (
      <div className='contain'>
        <div className='container'>
          <h1>Music App</h1>
          {currentlyPlaying && (
            <AudioPlayer currentlyPlaying={currentlyPlaying} />
          )}
          <Search songs={songs} add={this.addSong} />
          <SongList
            songs={playlist}
            selectSong={this.selectSong}
            remove={this.removeSong}
          />
        </div>
      </div>
    );
  }
}

export default App;
