import React, { Component } from 'react'; // React.createElement is called from
                                          // JSX, so don't remove this
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />); //Java stream
  }

  render() {
    console.log(this.state);

    return (
        <View>
          {this.renderAlbums()}
        </View>
    );
  }
}

export default AlbumList;
