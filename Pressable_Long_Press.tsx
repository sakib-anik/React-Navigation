import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Modal, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = (): React.JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <View style={styles.main}>
      <Pressable onPress={()=>console.warn('normal press')}
      onLongPress={()=>console.warn('long press')}
      onPressIn={()=>console.warn(' press in')}
      onPressOut={()=>console.warn(' press out')}
      delayLongPress={3000}
      disabled={false}>
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent: 'center'
  },
  pressableBtn:{
    textAlign:'center',
    backgroundColor:'blue',
    margin:10,
    padding:10,
    borderRadius:10,
    color:'#fff',
    fontSize:20,
    shadowColor:'#000',
    elevation:5
  }
})



export default App;
