import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  // Style names are arbitrary
  containerStyle: {
    borderWidth: 1,   // line around border
    borderRadius: 2,  // rounded corners
    borderColor: '#0d0d0d',
    borderBottomWidth: 0, // hide border on bottom
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,  //like border radius
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
