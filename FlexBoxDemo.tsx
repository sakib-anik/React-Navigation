import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = (): React.JSX.Element => {
  
  return (
    <View style={{backgroundColor: 'green',flex:1}}>
      <View style={{backgroundColor: 'red',flex:2,flexDirection: 'row'}}>
        <View style={{backgroundColor: 'violet', flex: 2,borderColor: 'red', borderWidth:8}}></View>
        <View style={{backgroundColor: 'white', flex: 1,borderColor: 'red', borderWidth:8}}></View>
        <View style={{backgroundColor: 'yellow', flex: 1,borderColor: 'red', borderWidth:8}}></View>
      </View>
      <View style={{backgroundColor: 'green',flex:1}}></View>
      <View style={{backgroundColor: 'blue',flex:1}}></View>
    </View>
  );
};

export default App;
