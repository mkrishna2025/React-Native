
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Preference from 'react-native-preference';

export default class Home extends Component {
  render() {
    const { params } = this.props.navigation.state;
    
    const username = params ? params.username : null;
    return (
      <View>
          <Text style={{fontSize: 20}}>Welcome to Home, {username}</Text>
          <Button
            title="Log Out"
            onPress={() => {
                Preference.set('IsLoggedIn', '0');
                this.props.navigation.navigate('StartUp');
              }
            }
          />
          <Button
            title="Start Up Screen"
            onPress={() => this.props.navigation.navigate('StartUp')}
          />
          <Button
            title="Main Screen"
            onPress={() => this.props.navigation.navigate('NB')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          
      </View>
    );
  }
}
