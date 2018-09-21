import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class NehaChat extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Neha Chat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Neha Chat</Label>
            <Input />
          </Item>
          <Button
            rounded
            danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => {
              const navigationAction = NavigationActions.navigate({
                routeName: "ProfileScreen",
                params: { name: "Neha" }
              });
              this.props.navigation.dispatch(navigationAction);
            }}
          >
            <Text>Goto Neha Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}