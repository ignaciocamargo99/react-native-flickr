import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../assets/styles/headerStyle';

const Header = (props) => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
