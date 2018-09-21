import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListDividerExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>React</Text>
            </ListItem>                    
            <ListItem >
              <Text>JS Depth</Text>
            </ListItem>
            <ListItem>
              <Text>React</Text>
            </ListItem>
            <ListItem>
              <Text>Node Basics</Text>
            </ListItem>
            <ListItem>
              <Text>React with Node</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Angular</Text>
            </ListItem>  
            <ListItem>
              <Text>Javascript</Text>
            </ListItem>
            <ListItem>
              <Text>Angular 2</Text>
            </ListItem>
             <ListItem>
              <Text>Angular 3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}