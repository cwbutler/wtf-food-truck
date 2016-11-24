import React, { Component } from 'react';
import { Linking, View, Text, TouchableOpacity } from 'react-native';
import { scene } from '../../common/styles';
import SceneBg from '../components/SceneBg';

const phone_number = '(662)-694-9832';

const textStyle = {
  color: 'white',
  textAlign: 'center',
  fontSize: 20
};

class Contact extends Component {
  static route = {
    navigationBar: {
      title: 'Contact WTF@'
    }
  }

  render() {
    return (
      <SceneBg>
        <Text style={[textStyle]}>Need To Place Your Order?</Text>
        <Text style={[textStyle]}>Don't Wait In Line...</Text>
        <Text style={[textStyle]}>CALL AHEAD</Text>

        <View style={{ marginTop: 50, marginBottom: 50 }}>
          <TouchableOpacity onPress={this._call}>
            <Text style={[textStyle, { fontSize: 30 }]}>{phone_number}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={[textStyle, { fontSize: 16 }]}>
            For catering events, inquires, & special orders,
            please email us:
          </Text>
          <Text style={[textStyle, { fontSize: 16 }]}>cookingwiththeodoms@gmail.com</Text>
        </View>

        <Text style={[textStyle]}>FOLLOW US!</Text>
        <View>
        </View>
      </SceneBg>
    );
  }

  _call() {
    Linking.openURL(`tel:${phone_number}`);
  }
}

export default Contact;
