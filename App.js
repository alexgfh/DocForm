import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import DataInput from './DataInput';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
	<Image style={{margin:15,width: 86, height: 120}}
	source={require('./images/heart.png')}/>
        <DataInput isFirst
	name="SYS"/>
        <DataInput
	name="DIA"/>
        <TouchableOpacity
	style={{marginRight:40,
	paddingRight:20,
	paddingLeft:20,
	marginLeft:40,
	marginTop:10,
	marginBottom:10,
	paddingTop:20,
	paddingBottom:20,
	borderRadius:25, 
	backgroundColor: 'purple'}}
        onPress={()=>{ToastAndroid.show('Your data is safely sent, thank you!', ToastAndroid.SHORT);}}>
	<Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
