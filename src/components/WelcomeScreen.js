import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>SABRINA & HENRIK'S</Text>
        <Text style={{fontSize: 14, textAlign: 'center'}}>AWESOME PROJECT</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
