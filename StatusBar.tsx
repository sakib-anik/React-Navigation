import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Modal, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = (): React.JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <View>
      <StatusBar backgroundColor="orange" barStyle="dark-content" hidden={true} />
      {/* barStyle="light-content" barStyle="default" */}
    </View>
  );
};




export default App;
