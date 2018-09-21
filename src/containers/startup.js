
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Preference from 'react-native-preference';

export default class StartUp extends Component {
  buttonClick(event){
    const IsLoggedIn = Preference.get('IsLoggedIn');
    const UserName = Preference.get('UserName');
    if(IsLoggedIn == "1"){
        this.props.navigation.navigate('Home', {username: UserName});
    } else {
        this.props.navigation.navigate('Login');
    }
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View>
          <Text style={{fontSize: 20}}>Welcome to Training</Text>
          <Button
            title="Please Enter"
            onPress={this.buttonClick.bind(this)}
          />
      </View>
    );
  }
}