import React from 'react';
import {Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import styles from '../../assets/styles/albumDetailStyle';

const AlbumDetail = ({navigation, title, albumId}) => {

  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => navigation.navigate('photoList', {albumId: albumId})}>
          See Now!
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
