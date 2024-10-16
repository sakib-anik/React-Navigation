import React,{useEffect, useState} from 'react';
import { ScrollView, Text, View } from 'react-native';
const App = ():React.JSX.Element => {
  const [data, setData] = useState([]);
  const getAPIData = async ()=>{
    const url = 'https://jsonplaceholder.org/posts/';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getAPIData();
  },[]);
  return(
    <ScrollView>
      <Text style={{fontSize:30}}>API Call</Text>
      {
        data.length ? data.map(item => (<View style={{borderBottomWidth:2,borderBottomColor:'#000'}} key={item.id}>
          <Text style={{fontSize:30,backgroundColor:'#ddd'}}>Id: {item.id}</Text>
          <Text style={{fontSize:30}}>UserId:{item.userId}</Text>
          <Text style={{fontSize:30}}>Title:{item.title}</Text>
          <Text style={{fontSize:30}}>Content:{item.content}</Text>
        </View>)) : null
      }
    </ScrollView>
  )
}

export default App;