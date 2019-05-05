import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from './src/components/WelcomeScreen';
import Background from './src/components/Background'

export default class App extends Component {
  render() {
    return (
        <Background>
          <View style={styles.container}>
            <WelcomeScreen />
          </View>
        </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
