import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DataInput extends React.Component {
  render() {
    return (
      <View style={{flexDirection: "row",padding:2}}>
        <Text style={{fontSize:20,borderColor:'green',borderWidth:3,padding:8}}>{this.props.name}:   </Text>
        <TextInput
        style={{backgroundColor: 'blue',width:80, borderRadius: 10}}
	underlineColorAndroid='transparent'
        textAlign={'center'}
	onSubmitEditing={this.props.goToNext}
	autoFocus={this.props.isFirst}
        keyboardType="numeric"

        />
      </View>
    );
  }
}


