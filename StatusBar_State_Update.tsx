import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Modal, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = (): React.JSX.Element => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState('default');
  
  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <StatusBar backgroundColor="orange" barStyle={theme} hidden={show} />
      {/* barStyle="light-content" barStyle="default" */}
      <Button title="Show/Hide" onPress={()=>setShow(!show)}></Button>
      <Button title="Mode" onPress={()=>{theme == 'dark-content' ? setTheme('default') : setTheme('dark-content')}} />
    </View>
  );
};




export default App;
