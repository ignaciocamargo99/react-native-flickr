import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import styles from '../../assets/styles/photoDetailStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const PhotoDetail = ({title, imageUrl}) => {

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{uri: imageUrl}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>
          See Now!  <Icon name="image" size={22} color="#044173" />
        </Button>
      </CardSection>
    </Card>
  );
};

export default PhotoDetail;
