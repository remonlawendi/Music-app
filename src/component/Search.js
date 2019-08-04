import React from 'react';
class Search extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    const { songs, add } = this.props;
    const { value } = this.state;
    const filteredList = songs.filter(
      ({ name, artist, length }) =>
        (name.toLowerCase().includes(value) ||
          artist.toLowerCase().includes(value) ||
          length
            .toString()
            .toLowerCase()
            .includes(value)) &&
        value !== ''
    );
    return (
      <div>
        <div class='input-group input-group-sm mb-3'>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.value}
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-sm'
            placeholder='search...'
          />
        </div>
        <ul className='form-group'>
          {filteredList.map(song => (
            <li className='list-group-item song' key={song.name}>
              <span>title: {song.name}</span>
              <span>artist: {song.artist}</span>
              <p className='m-0'>length: {song.length}</p>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => add(song)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
