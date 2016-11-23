import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { scene } from '../../common/styles';

class Menu extends Component {
  static route = {
    navigationBar: {
      title: 'Menu WTF@'
    }
  }

  render() {
    return (
      <View style={scene}>
        <Text>Menu</Text>
      </View>
    );
  }
}

export default Menu;
