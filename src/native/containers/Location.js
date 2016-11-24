import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Components, Location, Permissions } from 'exponent';
import { text } from '../../common/styles';
import SceneBg from '../components/SceneBg';

const { MapView } = Components;

const contact = Object.assign({}, text, {
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#f5f5f5',
  marginTop: 15
});

class CurrentLocation extends Component {
  static route = {
    navigationBar: {
      title: 'Current Location'
    }
  }

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      longitude: -88.7594017,
      latitude: 33.4748225
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    const { longitude, latitude } = this.state;
    return (
      <SceneBg>
        <MapView 
          style={{ width: 300, height: 300, margin: 20 }}
          showsUserLocation
          loadingEnabled
          initialRegion={{
            longitude,
            latitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00921
          }}
          mapType="hybrid"
          ref={component => this._map = component}
        >
          <MapView.Marker
            coordinate={{ latitude, longitude }}
            title="WTF@ Food Truck"
            description="WTF@'s mobile food truck"
          />
        </MapView>

        <Text style={[text]}>#WTF@</Text>
        <Text style={[text, { marginBottom: 15 }]}>Join Us For Lunch!!</Text>

        <Text style={[text]}>Don't Wait In Line...</Text>
        <Text style={[text]}>CALL AHEAD</Text>

        <TouchableOpacity onPress={this._contact}>
          <Text style={[contact]}>Contact Us</Text>
        </TouchableOpacity>
      </SceneBg>
    );
  }

  _contact = () => {
    this.props.navigation.getNavigator('drawer').jumpToItem('contact');
  }

  async _getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    }
  }
}

export default CurrentLocation;
