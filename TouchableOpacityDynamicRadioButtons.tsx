import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = (): React.JSX.Element => {
  const [selectedItem, setSelectedItem] = useState(2);
  const list = [
    {
      id:1,
      name: 'Radio 1'
    },
    {
      id:2,
      name: 'Radio 2'
    },
    {
      id:3,
      name: 'Radio 3'
    },
    {
      id:4,
      name: 'Radio 4'
    },
    {
      id:5,
      name: 'Radio 5'
    }
  ];
  return (
    <View style={styles.main}>
      {list.map(item => (<TouchableOpacity key={item.id} onPress={()=>setSelectedItem(item.id)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {selectedItem == item.id ? <View style={styles.radioBg}></View> : null }
          </View>
          <Text style={{fontSize: 30}}>{item.name}</Text>
        </View>
      </TouchableOpacity>))}
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
