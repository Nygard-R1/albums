import React, { Component } from 'react'; // React.createElement is called from
                                          // JSX, so don't remove this
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);

    return (
        <View>
          <Text>Album List</Text>
        </View>
    );
  }
}

export default AlbumList;
