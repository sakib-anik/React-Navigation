import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Modal, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';

const App = (): React.JSX.Element => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState('default');
  
  return (
    <WebView source={{uri:"https://kayoanime.com"}} />
  );
};




export default App;
