import React, { Component } from 'react';
import { Linking, View, Text, TouchableOpacity } from 'react-native';
import SceneBg from '../components/SceneBg';
import Social from '../components/Social';
import { text } from '../../common/styles';

const phone_number = '(662)-694-9832';
const email = 'cookingwiththeodoms@gmail.com';

class Contact extends Component {
  static route = {
    navigationBar: {
      title: 'Contact WTF@'
    }
  }

  render() {
    return (
      <SceneBg>
        <Text style={[text]}>Need To Place Your Order?</Text>
        <Text style={[text]}>Don't Wait In Line...</Text>
        <Text style={[text]}>CALL AHEAD</Text>

        <View style={{ marginTop: 50, marginBottom: 50 }}>
          <TouchableOpacity onPress={this._call}>
            <Text style={[text, { fontSize: 30, fontWeight: 'bold' }]}>
              {phone_number}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={[text, { fontSize: 16, marginBottom: 20 }]}>
            For catering events, inquires, & special orders,
            please email us:
          </Text>
          
          <TouchableOpacity onPress={this._email}>
            <Text style={[text, { fontSize: 18, fontWeight: 'bold' }]}>
              {email}
            </Text>
          </TouchableOpacity>
        </View>

        <Social />
      </SceneBg>
    );
  }

  _call() {
    Linking.openURL(`tel:${phone_number}`);
  }

  _email() {
    Linking.openURL(`mailto:${email}`)
  }
}

export default Contact;
