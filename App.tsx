import React,{useRef,useState} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Product from './components/Product';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
const StackNav = ()=>{
  let Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return(
    <Stack.Navigator screenOptions={{ headerShown: true,headerStyle:{backgroundColor:'#0163d2'},headerTintColor:'#fff', headerTitleAlign:'center', headerLeft: ()=><Icon name="menu" color="#fff" size={30} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} /> }}>
        <Stack.Screen options={{ headerTitle:'Home' }} name='Products' component={ProductWrapper} />
        <Stack.Screen name='User' component={UserList} />
    </Stack.Navigator>
  )
}
const DrawerNav = ()=>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerStyle:{backgroundColor:'#0163d2'},headerTintColor:'#fff', headerTitleAlign:'center',headerShown:false }}>
          <Drawer.Screen name="Home" component={StackNav} />
          <Drawer.Screen name="Users" component={UserList} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export const UserScreen = ()=>{
  return(
    <View>
      <Text style={{ color: 'black' }}>User Screen</Text>
    </View>
  )
}

export const ProfileScreen = ()=>{
  return(
    <View>
      <Text style={{ color: 'black' }}>Profile Screen</Text>
    </View>
  )
}

export default App;