
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { Icon } from 'native-base';
import StartUpScreen from './src/containers/startup.js';
import LoginScreen from './src/containers/login.js';
import RegisterScreen from './src/containers/register.js';
import HomeScreen from './src/containers/home.js';
import NBScreen from './src/containers/nbscreen.js';
import Users from './src/containers/users';
import Blog from './src/containers/blog';
import Courses from './src/containers/courses';
import ChatScreen from './src/containers/chat';
import MyProfile from './src/containers/myprofile';
import ProfileScreen from './src/containers/profile';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50
  }
});

const Navigations = StackNavigator({
  StartUp:{
    screen: StartUpScreen, 
    navigationOptions: 
    { 
      title: 'Startup', 
      headerLeft: <Image source={require('./logo.png')}  style  = {styles.stretch} resizeMode = "contain" /> ,
      headerRight: 
        <View style= {{flexDirection:"row",alignItems:"center",marginRight:15}}>
            <View>
              <Icon type="FontAwesome" size={24} color="black" name="bell"/>
            </View>
            <View  style= {{marginLeft:10}}>
              <Icon type="FontAwesome" size={24} color="black" name="envelope" />
            </View>
        </View>
    }
  },
  Login: {
    screen: LoginScreen, navigationOptions: { title: 'Login' }
  },
  Home: {
    screen: HomeScreen, navigationOptions: ({navigation}) => {
        return {
            title: 'Home',
            headerRight: <View style= {{flexDirection:"row",alignItems:"center",marginRight:15}}>
            <View>
              <Icon type="FontAwesome"  name="sign-out" style={{fontSize: 20}} onPress={() =>
                 navigation.navigate('StartUp')
              }/>
            </View>
        </View>

        };
    }
  },
  NB:{
    screen: NBScreen, navigationOptions: { title: 'Dashboard' }
  },
  Users: {
    screen: Users, navigationOptions: { title: 'Users' }
  },
  Courses: {
    screen: Courses, navigationOptions: { title: 'Courses' }
  },
  Chat: { screen: ChatScreen },
  ProfileScreen: { screen: ProfileScreen },
  Blog: { screen: Blog},
  MyProfile: { screen: MyProfile}
}, {
    initialRouteName: 'StartUp'
  });

export default class App extends React.Component {
  render() {
    return <Navigations />;
  }
}