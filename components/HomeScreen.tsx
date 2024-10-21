import React from 'react';
import { Text, View, Button } from 'react-native';
const HomeScreen = ({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color:'black', fontSize:20 }}>Let's Learn Tab Navigation</Text>
            <Button title="Go to Settings" onPress={()=>navigation.navigate('Settings')} />
        </View>
    );
}

export default HomeScreen;