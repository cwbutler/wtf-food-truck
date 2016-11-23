import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function DrawerItem({ isSelected = false, label = '' }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
    </View>
  );
}

export default DrawerItem;
