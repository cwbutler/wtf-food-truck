import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SceneBg from '../components/SceneBg';

class Menu extends Component {
  static route = {
    navigationBar: {
      title: 'Menu WTF@'
    }
  }

  render() {
    return (
      <SceneBg>
      </SceneBg>
    );
  }
}

export default Menu;
