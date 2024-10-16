import React,{useRef,useState} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = ():React.JSX.Element => {
  const [user,setUser] = useState('');
  const setData = async ()=>{
    await AsyncStorage.setItem('name','Sakib Ahmed');
  }
  const getData = async ()=>{
    const name = await AsyncStorage.getItem('name');
    setUser(name);
  }
  const removeData = async ()=>{
    await AsyncStorage.removeItem('name');
  }
  return(
    <View>
      <Text>Hi {user}</Text>
      <Button onPress={setData} title="Set Data" />
      <Button onPress={getData} title="Get Data" />
      <Button onPress={removeData} title="Remove Data" />
    </View>
  )
}

export default App;