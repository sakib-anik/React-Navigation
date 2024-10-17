import React,{useRef,useState,useEffect} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';
import {getUserList} from './redux/action';
const UserList = ():React.JSX.Element => {
  const [user,setUser] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  });
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
  let userList = useSelector((state)=>state.userReducer);
  userList = userList.length > 0 && userList[0].users;
  
  
  return(
    <View>
      {userList && userList.length ?
        userList.map(user=>(<Text key={user.id} style={{ fontSize:20,color:'black'}}>{user.firstName}</Text>))
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default UserList;