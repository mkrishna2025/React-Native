
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View>
          <Text style={{fontSize: 20}}>Demo1. Welcome to Demo</Text>
          <Text style={{fontSize: 18}}>Krishna</Text>
          <Text style={{fontSize: 16}}>from Hyderabad</Text>
      </View>
    );
  }
}