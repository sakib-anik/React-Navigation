import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Modal, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = (): React.JSX.Element => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState('default');
  
  return (
    <View>
      <Text>{Platform.OS}</Text>
      <Text>{JSON.stringify(Platform)}</Text>
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
};




export default App;
