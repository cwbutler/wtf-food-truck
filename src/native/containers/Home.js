import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { scene } from '../../common/styles';

class Home extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  }

  render() {
    return (
      <View style={scene}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
