import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const App = (): React.JSX.Element => {
  
  return (
    <View style={{flex:1}}>
      <TouchableHighlight>
        <Text style={styles.button}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>Primary</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles=StyleSheet.create({
  button:{
    backgroundColor:'#bbb',
    margin: 10,
    fontSize: 30,
    padding: 5,
    textAlign: 'center',
    borderRadius: 10,
    color: '#fff'
  },
  success:{
    backgroundColor: 'green'
  },
  warning:{
    backgroundColor:'gold'
  },
  error:{
    backgroundColor:'red'
  },
  primary:{
    backgroundColor:'blue'
  }
})

export default App;
