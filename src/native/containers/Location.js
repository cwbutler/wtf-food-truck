import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Components } from 'exponent';
import { scene, text } from '../../common/styles';

const { MapView } = Components;

class Location extends Component {
  static route = {
    navigationBar: {
      title: 'Current Location'
    }
  }

  render() {
    return (
      <View style={[scene, { justifyContent: 'flex-start' }]}>
        <MapView 
          style={{ width: 300, height: 300, margin: 20 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <Text style={[text]}>#WTF@ Join Us For Lunch!!</Text>
      </View>
    );
  }
}

export default Location;
