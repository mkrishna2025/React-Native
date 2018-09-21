import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';
import { Icon } from 'native-base';
import Preference from 'react-native-preference';
import {Platform} from 'react-native'

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
    iconMargin: 7,
    iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 30,
}

export default class Drawer extends Component {
  constructor(props){
    super(props);
    const UserName = Preference.get('UserName');
    this.state = {
      username: UserName
    }
  }
  render() {
    return <Content style={{backgroundColor: '#fff'}}>
        <View style={{flex: 1, backgroundColor: '#7094db', height: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./logo.png')} style={{width: 170, height: 170}}/>
          <Text style={{fontSize: 20}}>{this.state.username}</Text>
        </View>

        <List>
          <ListItem icon>
            <Left>
              <Icon type="FontAwesome" name="user" style={{fontSize: 20}} />
            </Left>
            <Body>
              <Text style={{fontSize: 25, color: 'green'}} onPress={() => {
                    this.props.navigator.navigate('MyProfile');
                  }
                }>Profile</Text>
            </Body>
            <Right>
              <Icon type="FontAwesome" name="arrow-right" style={{fontSize: 20}} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon type="FontAwesome"  name="location-arrow" style={{fontSize: 20}} />
            </Left>
            <Body>
              <Text style={{fontSize: 25, color: 'green'}} onPress={() => {
                    this.props.navigator.navigate('Users');
                  }
                }>Users</Text>
            </Body>

            <Right>
              <Icon type="FontAwesome"  name="toggle-on" style={{fontSize: 20}} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon type="FontAwesome"  name="share-square" style={{fontSize: 20}} />
            </Left>
            <Body>
              <Text style={{fontSize: 25, color: 'green'}}>Share</Text>
            </Body>
            <Right>
              <Icon type="FontAwesome"  name="arrow-right" style={{fontSize: 20}} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon type="FontAwesome" name="sign-out" style={{fontSize: 20}} />
            </Left>
            <Body>
              <Text style={{fontSize: 25, color: 'green'}} onPress={() => {
                    Preference.set('IsLoggedIn', '0');
                    this.props.navigator.navigate('StartUp');
                  }
                }>
                Logout
              </Text>
            </Body>
          </ListItem>
        </List>
      </Content>;
  }
}
const styles=StyleSheet.create({
  listitem:{
    height:30
  }
});