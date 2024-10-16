import React,{useRef,useState} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import Product from './Product';
const ProductWrapper = ({navigation}):React.JSX.Element => {
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
    <View style={styles.container}>
      <Button title="Go to User List" onPress={()=>navigation.navigate('User')} />
      <Header />
      <ScrollView>
        {products.map((item,index)=><Product key={index} item={item} />)} 
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  itemFont:{
    fontSize:24
  }
})

export default ProductWrapper;