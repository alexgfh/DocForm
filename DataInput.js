import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DataInput extends React.Component {
  render() {
    return (
      <View style={{flexDirection: "row",padding:2}}>
        <Text style={{fontSize:20,borderColor:'green',borderWidth:3,padding:8}}>{this.props.name}:   </Text>
        <TextInput
        style={{width:80}}
        textAlign={'center'}
        keyboardType="numeric"
        placeholder="100"
        />
      </View>
    );
  }
}


