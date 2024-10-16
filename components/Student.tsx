import React from 'react'
import { Text, View } from 'react-native'

class Student extends React.Component{
  render() {
    return(
      <View>
        <Text style={{fontSize:25,color:'red'}}>Child Component {this.props.name}</Text>
      </View>
    )
  }
}



export default Student;