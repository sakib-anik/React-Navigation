import React, { useState } from 'react';
import {View,Text,Button, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = ():React.JSX.Element =>{
  const btnAction = ()=>{
    console.warn('Ace in this');
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Login = (props):React.JSX.Element =>{
  const [name, setName] = useState('');
  const age = 1239;
  return(
    <View style={styles.main}>
      <Text style={styles.textStyle}>Login Screen</Text>
      <TextInput style={{borderWidth:2,borderColor:'black',fontSize:30}} placeholder='Enter Text' onChangeText={(text)=>setName(text)} />
      <Button title="Goto Home Screen" onPress={()=>props.navigation.navigate('Home',{name,age})} />
    </View>
  )
}

const Home = (props):React.JSX.Element =>{
  return(
    <View style={styles.main}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button title="Goto Login Screen" onPress={()=>props.navigation.navigate('Login')} />
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textStyle:{
    fontSize: 30
  }
});

const Header = ()=>{
  return (
    <TextInput placeholder='name' />
  )
}

export default App;