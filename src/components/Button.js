import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles/buttonStyle';

const Button = ({ onPress, children }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
