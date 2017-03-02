import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import TextContainer from './TextContainer.js';

const AlbumDetail = ({ album }) => {
  const { containerStyle, thumbnailStyle } = styles;
  const { title, artist, thumbnail_image } = album;

  return (
    console.log('Creating Album Detail'),
    <Card>
      <CardSection style={containerStyle}>
        <View>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <TextContainer>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </TextContainer>
      </CardSection>
    </Card>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
