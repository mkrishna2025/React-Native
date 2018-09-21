
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Keyboard
} from 'react-native';
import { apiPostCall } from '../util';
import Preference from 'react-native-preference';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Krishna',
      password: 'admin',
      errorMessage: ''
    }
  }

  onLogin(event){
    Keyboard.dismiss();
    var loginScreen = this;
    Preference.set('IsLoggedIn', '1');
    Preference.set('UserName', loginScreen.state.username);
    loginScreen.props.navigation.navigate('Home', {username: loginScreen.state.username});
    /*
    var data = {
      username: this.state.username,
      password: this.state.password
    };
    
    

    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('http://studentsdemo.azurewebsites.net/api/User/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.Success) {
        Preference.set('IsLoggedIn', '1');
        Preference.set('UserName', loginScreen.state.username);
        loginScreen.props.navigation.navigate('Home', {username: loginScreen.state.username});
      } else {
        Alert.alert(JSON.stringify(responseJson));
      }
    })
    .catch(error => {
      Alert.alert(' Something Failed');
    });
    */
  }

  render() {
    return (
      <View>
          <Text style={{fontSize: 20}}>Welcome to Login</Text>
          <TextInput
            value={this.state.username}
            placeholder="UserName"
            underlineColorAndroid="transparent"
            autoFocus={true}
            onChangeText={text => this.setState({username: text})}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({password: text})}
          />
          <Button
            title="Login"
            onPress={this.onLogin.bind(this)}
          />
          <Text style={{fontSize: 16}}>{this.state.errorMessage}</Text>
      </View>
    );
  }
}