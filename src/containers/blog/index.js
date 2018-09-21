import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://facebook.github.io/react-native/blog/'}}
        style={{marginTop: 20}}
      />
    );
  }
}