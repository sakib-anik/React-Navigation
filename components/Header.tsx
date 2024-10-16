import React,{useRef,useState} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
const Header = ():React.JSX.Element => {
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
  const cartData = useSelector((state)=>state.reducer);
  
  return(
    <View>
      <Text style={{ fontSize:30, textAlign:'right',padding:10, backgroundColor:'orange' }}>{cartData.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default Header;