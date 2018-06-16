import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import DataInput from './DataInput';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
	<Image style={{width: 140, height: 140}}
	source={require('./images/icon.jpg')}/>
        <DataInput isFirst
	name="Sys"/>
        <DataInput
	name="Dia"/>
        <TouchableOpacity
	style={{marginRight:40,
	paddingRight:20,
	paddingLeft:20,
	marginLeft:40,
	marginTop:10,
	paddingTop:20,
	paddingBottom:20,
	borderRadius:25, 
	backgroundColor: 'mediumpurple'}}
        onPress={()=>0}>
	<Text style={{color:'blue'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingVertical:60,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
