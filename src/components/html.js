
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

 export class H1 extends Component {
  render() {
    return (
       <View>
          <Text style={{fontSize: 20}}>
           {this.props.children}
          </Text>
       </View>
    );
  }
}

 export class H2 extends Component {
  render() {
    return (
       <View>
          <Text style={{fontSize: 18}}>
           {this.props.children}
          </Text>
       </View>
    );
  }
}

export class H3 extends Component {
  render() {
    return (
       <View>
          <Text style={{fontSize: 16}}>
           {this.props.children}
          </Text>
       </View>
    );
  }
}

export class Label extends Component {
  render() {
    return (
       <View>
          <Text>
           {this.props.children}
          </Text>
       </View>
    );
  }
}

export class Input extends Component {
  render() {
    if(this.props.type == 'text'){
      return (
       <View>
          <TextInput
              style={{height: 40}}
              placeholder={this.props.placeholder}
              onChangeText={(text) => this.setState({text})}
          />
       </View>
      );
    } else if(this.props.type == 'submit'){
      return (
       <View>
          <Button
              style={{height: 40}}
              title={this.props.value}
              onPress={this.props.onClick}
          />
       </View>
      );
    }
    return (
       <View>
       </View>
    );
  }
}

export class Div extends Component {
  render() {
    return (
       <View>
        {this.props.children}
       </View>
    );
  }
}