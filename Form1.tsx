
import React,{useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput
} from 'react-native';






function App(): React.JSX.Element {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  function changeIt(){
    setUser('');setEmail('');setPassword('');setShow(false);
  }
  return (
    <View>
      <TextInput secureTextEntry={false} placeholder='Enter Name: ' onChangeText={(text)=>setUser(text)} value={user} style={{borderWidth:2,padding:5,margin:10,fontSize:30}} />
      <TextInput secureTextEntry={false} placeholder='Enter Email: ' onChangeText={(text)=>setEmail(text)} value={email} style={{borderWidth:2,padding:5,margin:10,fontSize:30}} />
      <TextInput secureTextEntry={showPassword ? true : false} placeholder='Enter Password: ' onChangeText={(text)=>setPassword(text)} value={password} style={{borderWidth:2,padding:5,margin:10,fontSize:30}} />
      <Button color={"blue"} title="Show Password" onPress={()=>setShowPassword(!showPassword)} />
      <Button color={"red"} title="Press Me" onPress={()=>setShow(true)} />
      <Button color={"green"} title="Clear Me" onPress={changeIt} />
      {show && <View>
        <Text style={{fontSize: 40}}>{user}</Text>
        <Text style={{fontSize: 40}}>{email}</Text>
        <Text style={{fontSize: 40}}>{password}</Text>
      </View>}
    </View>
  );
}



export default App;
