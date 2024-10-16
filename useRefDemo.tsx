import React,{useRef} from 'react';
import {Text,View,Button, TextInput, TouchableHighlight} from 'react-native';
const App = ():React.JSX.Element => {
  const input = useRef();
  return(
    <View>
      <TextInput placeholder='Name' ref={input} />
      <TextInput placeholder='Email' />
      <TouchableHighlight onPress={()=>{input.current.focus();input.current.setNativeProps({fontSize:30,color:'green'})}}><Text>Press</Text></TouchableHighlight>
    </View>
  )
}

export default App;