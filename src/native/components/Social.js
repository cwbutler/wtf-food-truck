import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';
import { colors, text } from '../../common/styles';

function SocialMedia() {
  return (
    <View style={{ alignSelf: 'stretch' }}>
      <Text style={[text, { marginBottom: 20 }]}>FOLLOW US!</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-around' }}>
        <TouchableOpacity>
          <FontAwesome name="facebook-square" size={46} color={colors.textColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={46} color={colors.textColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter-square" size={46} color={colors.textColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="snapchat-square" size={46} color={colors.textColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SocialMedia;
