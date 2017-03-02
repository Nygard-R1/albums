import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import TextContainer from './TextContainer.js';

const AlbumDetail = ({ album }) => {
  const {
    containerStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  const { title, artist, thumbnail_image, image } = album;

  return (
    console.log('Creating Album Detail'),
    <Card>
      <CardSection style={containerStyle}>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <TextContainer>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </TextContainer>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
    </Card>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
