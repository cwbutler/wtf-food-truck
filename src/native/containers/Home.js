import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { scene, text } from '../../common/styles';

class Home extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  }

  render() {
    return (
      <View style={scene}>
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        
        <Text style={[text]}>Tap Here To Enter</Text>
        <TouchableOpacity onPress={this._enter}>
          <Image source={require('../../assets/Truck.png')} />
        </TouchableOpacity>
      </View>
    );
  }

  _enter = () => {
    this.props.navigation.getNavigator('drawer').jumpToItem('location');
  }
}

export default Home;
