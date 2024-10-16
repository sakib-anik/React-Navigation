
import React,{useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  FlatList
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
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 31}}>List with Flat List Component</Text>
      <FlatList data={users} renderItem={({item})=><Text>{item.name}</Text>} keyExtractor={item => item.id} />
    </View>
  );
}



export default App;
