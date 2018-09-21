import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/mkrishna2025/'}}
        style={{marginTop: 20}}
      />
    );
  }
}