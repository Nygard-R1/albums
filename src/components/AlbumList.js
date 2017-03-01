import React, { Component } from 'react'; // React.createElement is called from
                                          // JSX, so don't remove this
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    debugger; //debug breakpoint
  }

  render() {
    return (
        <View>
          <Text>Album List</Text>
        </View>
    );
  }
}

export default AlbumList;
