
import React,{useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';






function App(): React.JSX.Element {
  
  const users = [
    {
      id: 1,
      name: "Tony"
    },
    {
      id: 2,
      name: "Bruce"
    },
    {
      id: 3,
      name: "Teen"
    },
    {
      id: 4,
      name: "Teen"
    },
    {
      id: 5,
      name: "Teen"
    },
    {
      id: 6,
      name: "Teen"
    },
    {
      id: 7,
      name: "Teen"
    },
    {
      id: 8,
      name: "Teen"
    },
    {
      id: 9,
      name: "Teen"
    },
    {
      id: 10,
      name: "Teen"
    },
    {
      id: 11,
      name: "Teen"
    },
    {
      id: 12,
      name: "Teen"
    },
    {
      id: 13,
      name: "Teen"
    },
    {
      id: 14,
      name: "Teen"
    },
    {
      id: 15,
      name: "Teen"
    },
    {
      id: 16,
      name: "Teen"
    },
    {
      id: 17,
      name: "Teen"
    },
    {
      id: 18,
      name: "Teen"
    },
    {
      id: 19,
      name: "Teen"
    },
    {
      id: 20,
      name: "Teen"
    },
  ]
  return (
    <View>
      <Text style={{fontSize: 31}}>List with Flat List Component</Text>
        <ScrollView style={{marginBottom:60}}>
          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
              {users.map(item => <Text style={styles.test} key={item.id}>{item.name}</Text>)}
          </View>
        </ScrollView>
    </View>
  );
}

const styles=StyleSheet.create({
  test:{
    backgroundColor: 'blue',
    margin:5,
    padding:5,
    fontSize:31,
    height:125,
    width:125,
    textAlign:'center',
    textAlignVertical:'center',
    color:'#fff'
  }
})



export default App;
