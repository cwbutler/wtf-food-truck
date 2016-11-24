import React from 'react';
import { Image, View } from 'react-native';
import { scene } from '../../common/styles';

const bgStyle = {
  flexGrow: 1,
  resizeMode: 'contain',
  paddingLeft: 10,
  paddingRight: 10,
  alignItems: 'center',
  justifyContent: 'center'
};

function SceneBG({ children, style }) {
  return (
    <View style={[scene]}>
      <Image source={require('../../assets/logo_faded.png')} style={[bgStyle, style]}>
        {children}
      </Image>
    </View>
  );
}

export default SceneBG;