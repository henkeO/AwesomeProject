import React, {Component} from 'react';
import { ImageBackground } from 'react-native';


const Background = (props) => {
  return (
      <ImageBackground source={require('../assets/img/sabrinahenrik.png')} style={{ width: '100%', height: '100%' }}>
        {props.children}
      </ImageBackground>
  )
}

export default Background;
