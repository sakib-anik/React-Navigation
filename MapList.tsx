
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
    },
    {
      id: 3,
      name: "Teen"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 31}}>List with Flat List Component</Text>
      {users.map(item => <Text key={item.id}>{item.name}</Text>)}
    </View>
  );
}



export default App;
