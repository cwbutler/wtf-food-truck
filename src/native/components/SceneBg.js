import React from 'react';
import { Image, View } from 'react-native';
import { scene } from '../../common/styles';
import Footer from './footer';

const bgStyle = {
  flexGrow: 1,
  resizeMode: 'contain',  
  width: null,
  height: null,
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 10,
  alignSelf: 'stretch'
};

function SceneBG({ children, style }) {
  return (
    <View style={[scene]}>
      <Image source={require('../../assets/logo_faded.png')} style={[bgStyle, style]}>
        {children}
      </Image>
      <Footer />
    </View>
  );
}

export default SceneBG;