import React from 'react';
import { Text, View, Button } from 'react-native';
const UserScreen = ({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color:'black', fontSize:20 }}>User Screen</Text>
        </View>
    );
}

export default UserScreen;