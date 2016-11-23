import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { scene } from '../../common/styles';

class About extends Component {
  static route = {
    navigationBar: {
      title: 'About WTF@'
    }
  }

  render() {
    return (
      <View style={[scene, { paddingLeft: 15, paddingRight: 15 }]}>
        <Text style={{ color: 'white', fontSize: 22 }}>
          WTF Mobile is an extension of the greatest soulfood restaurant in
          the state of Mississippi! For great seafood, burgers, & southern 
          comfort food... all in a food truck experience... follow us to get
          an undeniable taste of delicousness!
        </Text>
      </View>
    );
  }
}

export default About;
