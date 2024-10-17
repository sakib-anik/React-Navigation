import React,{useEffect, useRef,useState} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from './redux/action';
const Product = (props):React.JSX.Element => {
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
  const {item} = props;
  const dispatch = useDispatch();
  const handleAddToCart = (item)=>{
    dispatch(addToCart(item));
  }
  const handleRemoveFromCart = (item)=>{
    dispatch(removeFromCart(item.name));
  }
  const cartData = useSelector(state=>state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(()=>{
    let result = cartData.filter(cartItem => cartItem.name === item.name);
    if(result.length)
      setIsAdded(true);
    else
      setIsAdded(false);
  },[cartData]);
  return(
    <View style={styles.container}>
        <Text style={styles.itemFont}>{item.name}</Text>
        <Text style={styles.itemFont}>{item.price}</Text>
        <Text style={styles.itemFont}>{item.color}</Text>
        <Image source={{ uri:item.image }} height={130} width={90} />
        {isAdded ? <Button title="Remove from Cart" onPress={()=>handleRemoveFromCart(item)} /> : <Button title="Add to Cart" onPress={()=>handleAddToCart(item)} />}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10
    },
    itemFont:{
        fontSize:24,
        color:'black'
    }
})

export default Product;