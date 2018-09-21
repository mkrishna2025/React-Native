import React, { Component } from "react";
import NehaChat from "./neha.js";
import KarthikChat from "./karthik.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    NehaChat: { screen: props => <NehaChat {...props} /> },
    KarthikChat: { screen: props => <KarthikChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("NehaChat")}
            >
              <Icon name="bowtie" />
              <Text>Neha</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("KarthikChat")}
            >
              <Icon name="briefcase" />
              <Text>Karthik</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));