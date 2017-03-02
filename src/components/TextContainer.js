import React from 'react';
import { View } from 'react-native';

const TextContainer = (props) => {
  const { containerStyle } = styles;

  return (
    console.log('Creating Text Container'),
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default TextContainer;
