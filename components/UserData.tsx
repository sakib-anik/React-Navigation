import {Text,View,StyleSheet} from 'react-native'
const UserData = ({item}):React.JSX.Element=>{
    return(
        <View style={styles.box}>
            <Text style={styles.item}>{item.id}</Text>
            <Text style={styles.item}>{item.name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    test:{
      backgroundColor: 'blue',
      margin:5,
      padding:5,
      fontSize:31,
      height:125,
      width:125,
      textAlign:'center',
      textAlignVertical:'center',
      color:'#fff'
    },
    item:{
        flex:1,
        fontSize: 25,
        margin: 2,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    box:{
        flexDirection: 'row',
        borderColor: 'orange',
        borderWidth: 2,
        margin: 4
    }
  })

export default UserData