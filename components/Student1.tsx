import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Student = ({roll = 5}):React.JSX.Element => {
  useEffect(()=>{
    console.warn('Hello')
  },[roll])
  return(
    <View>
      <Text>Roll is: {roll}</Text>
    </View>
  )
}

export default Student;