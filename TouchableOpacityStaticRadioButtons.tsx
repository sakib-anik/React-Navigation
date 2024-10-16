import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = (): React.JSX.Element => {
  const [selectedItem, setSelectedItem] = useState(2);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setSelectedItem(1)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {selectedItem == 1 ? <View style={styles.radioBg}></View> : null }
          </View>
          <Text style={{fontSize: 30}}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelectedItem(2)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
          {selectedItem == 2 ? <View style={styles.radioBg}></View> : null }
          </View>
          <Text style={{fontSize: 30}}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  wrapper:{
    flexDirection: 'row',
    alignItems:'center'
  },
  radio:{
    height: 40,
    width: 40,
    borderWidth: 3,
    borderRadius: 20,
    margin: 5,
    borderColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioBg:{
    height: 30,
    width: 30,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: 'skyblue',
    borderColor: 'skyblue'
  }
})

export default App;
