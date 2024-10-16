import React, { useState } from 'react';
import {View,Text,Button, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = ():React.JSX.Element =>{
  const btnAction = ()=>{
    console.warn('Ace in this');
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        title: 'Sakib WW',
        headerRight: ()=><Header />,
        headerStyle:{
          backgroundColor: 'blue'
        },
        headerTintColor: 'orange',
        headerTitleStyle:{
          fontSize:25
        }
      }}>
        <Stack.Screen name="Login" component={Login} options={{
          headerTitle:()=><Button title="Left" onPress={btnAction} />,
          headerRight:()=><Button title="Right" />,
          title: 'Prince',
          headerStyle:{
            backgroundColor: 'red'
          },
          headerTintColor: 'skyblue',
          headerTitleStyle:{
            fontSize:30
          }
        }} /> 
        <Stack.Screen name="Home" component={Home} /> 
      </Stack.Navigator>
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
  const {name,age} = props.route.params;
  return(
    <View style={styles.main}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Text style={styles.textStyle}>Name: {name}</Text>
      <Text style={styles.textStyle}>Age: {age}</Text>
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