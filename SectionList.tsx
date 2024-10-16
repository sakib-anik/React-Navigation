
import React,{useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  SectionList
} from 'react-native';
import UserData from './components/UserData';
function App(): React.JSX.Element {
  
  const users = [
    {
      id: 1,
      name: "Tony",
      data:['PHP','REACTJS','ANGULAR']
    },
    {
      id: 2,
      name: "Bruce",
      data:['JAVA','VUEJS','SVELTE']
    },
    
  ]
  return (
    <View>
      <Text style={{fontSize: 31}}>List with Flat List Component</Text>
        <ScrollView style={{marginBottom:60}}>
          <View>
            <SectionList sections={users} renderItem={({item})=><Text style={{marginLeft:20, fontSize:20, color: 'red'}}>{item}</Text>}
            renderSectionHeader={({section:{name}})=><Text style={{fontSize:30}}>{name}</Text>} />
          </View>
        </ScrollView>
    </View>
  );
}





export default App;
