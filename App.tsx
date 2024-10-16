import React,{useRef,useState} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Product from './components/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';
import 'react-native-gesture-handler';
let Stack = createNativeStackNavigator();
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

  const products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      name: 'Apple Mobile',
      color: 'black',
      price: 130000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      name: 'Nokia Mobile',
      color: 'green',
      price: 20000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
  ]

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper} />
        <Stack.Screen name='User' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;