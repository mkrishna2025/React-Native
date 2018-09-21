
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {H1, H2, H3} from '../components/html.js';

export default class Demo extends Component {
  render() {
    return (
      <View>
          <H1>Demo2: Welcome to Demo.</H1>
          <H2>Krishna</H2>
          <H3>from Hyderabad</H3>
      </View>
    );
  }
}