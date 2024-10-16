import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Student from './components/Student';

class App extends React.Component{
  fruit(val){
    this.setState({name:val})
  }
  fruiti(){
    console.warn("Hi there");
  }
  constructor(){
    super();
    this.state = {
      name: "Sakib Ahmed"
    }
  }
  render() {
    return(
      <View>
        <Text style={{fontSize:35}}>Parent Component {this.state.name}</Text>
        <TextInput onChangeText={(text)=>this.fruit(text)} placeholder='Enter: ' />
        <Student name={this.state.name} />
        <Button onPress={()=> this.fruiti()} color={'blue'} title="Press On" />

      </View>
    )
  }
}

export default App;