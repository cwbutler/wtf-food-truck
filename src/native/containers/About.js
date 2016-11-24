import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import SceneBg from '../components/SceneBg';

class About extends Component {
  static route = {
    navigationBar: {
      title: 'About WTF@'
    }
  }

  render() {
    return (
      <SceneBg>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
          WTF Mobile is an extension of the greatest soulfood restaurant in
          the state of Mississippi! For great seafood, burgers, & southern 
          comfort food... all in a food truck experience... follow us to get
          an undeniable taste of delicousness!
        </Text>
      </SceneBg>
    );
  }
}

export default About;
