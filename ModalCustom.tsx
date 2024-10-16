import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Modal, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';

const App = (): React.JSX.Element => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState('default');
  
  return (
    <View style={styles.container}>
      {
        show ?
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Some Text</Text>
            <Button title="Close" onPress={()=>setShow(false)} />
          </View>
        </View>
        : null }
      <Button title="Open Dialog" onPress={()=>setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-end'
  },
  modal:{
    flex:1,
    backgroundColor:'rgba(50,50,50,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body:{
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-end'
  }
})



export default App;
