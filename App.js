import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import DataInput from './DataInput';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <DataInput name="Systollic Pressure"/>
        <DataInput name="Diastolic Pressure"/>
        <Button style={{flex:1}}
        title="Submit"
        onPress={()=>0}
        />
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
    justifyContent: 'center',
  },
});
