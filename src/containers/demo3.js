
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Div, H1, H2, H3, Label, Input} from '../components/html.js';

export default class Demo extends Component {
  constructor(props){
      super(props);
      this.state = {
        result: 10
      };
  }

  buttonClick(){
      var value = 20;
      this.setState({ result: value});
 }
    
  render() {
    return (
      <View>
          <Div>
                <H1>{this.props.welcomeText} Hello</H1>
                    <Label>Value A : </Label><Input type="text"/>
                    <Label>Value B : </Label><Input type="text" />
                    <Input type="submit" value="Calculate" onClick={this.buttonClick.bind(this)} />
                <H2>Result is {this.state.result}</H2>
          </Div>
      </View>
    );
  }
}