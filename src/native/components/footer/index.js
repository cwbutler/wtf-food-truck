import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Footer({ showContact = true }) {
  const year = new Date().getFullYear();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Where The Food @ Mobile {year}
      </Text>
    </View>
  );
}

export default Footer;
