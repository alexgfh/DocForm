import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DataInput extends React.Component {
  render() {
    return (
      <View style={{flexDirection: "row"}}>
        <Text>{this.props.name}:   </Text>
        <TextInput
        style={{width:50}}
        textAlign={'center'}
        keyboardType="numeric"
        placeholder="100"
        />
      </View>
    );
  }
}


