
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Drawer
} from 'native-base';
import { Icon } from 'native-base';

import SideBar from '../components/sidebar.js';

export default class NBScreen extends Component {
  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
          <Drawer
              ref={ref => {this._drawer = ref;}}
              content={<SideBar navigator={this.props.navigation} />}
              onClose={() => this.closeDrawer()}
             >
           <Header style={{backgroundColor: '#00bc78', }}>
                <Left>
                    <Button transparent onPress={() => this.openDrawer()}>
                        <Icon name="bars" type="FontAwesome" style={{fontSize: 20}} />
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.text}>Trainer Center</Text>
                </Body>                  
            </Header>
        <Content>
           <View style={styles.component1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Users')}>
                <Image source={require("../images/users.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Users
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Courses')} >
                <Image source={require("../images/learning.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Courses
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.component1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
                <Image source={require("../images/chat.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Chat
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> console.log('Need Implementation')} >
                <Image source={require("../images/events.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Events
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.component1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Blog')}>
                <Image source={require("../images/query.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Blog
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> console.log('Need Implementation')}>
                <Image source={require("../images/contactus.png")} />
                <Text
                style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    color: "#000000"
                }}
                >
                {" "}
                Contact Us
                </Text>
            </TouchableOpacity>
            </View>
         </Content>
         </Drawer>
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  component1: {
    top: 20,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bar: {
    color: '#ffffff',
    fontSize: 25,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  }
});
