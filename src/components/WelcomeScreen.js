import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: '#FFF'}}>Sabrina & Henrik'S</Text>
        <Text style={{fontSize: 20, textAlign: 'center', color: '#FFF'}}>AWESOME PROJECT</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
