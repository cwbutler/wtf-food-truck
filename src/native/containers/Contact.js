import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { scene } from '../../common/styles';

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
      <View style={scene}>
        <Text style={[textStyle]}>Need To Place Your Order?</Text>
        <Text style={[textStyle]}>Don't Wait In Line...</Text>
        <Text style={[textStyle]}>CALL AHEAD</Text>

        <View style={{ marginTop: 50, marginBottom: 50 }}>
          <Text style={[textStyle, { fontSize: 30 }]}>(662)-694-9832</Text>
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
      </View>
    );
  }
}

export default Contact;
