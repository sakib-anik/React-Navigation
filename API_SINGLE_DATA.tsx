import React,{useEffect, useState} from 'react';
import { Text, View } from 'react-native';
const App = ():React.JSX.Element => {
  const [data, setData] = useState(undefined);
  const getAPIData = async ()=>{
    const url = 'https://jsonplaceholder.org/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getAPIData();
  },[]);
  return(
    <View>
      <Text style={{fontSize:30}}>API Call</Text>
      {
        data ? (<View>
          <Text style={{fontSize:30}}>{data.id}</Text>
          <Text style={{fontSize:30}}>{data.userId}</Text>
          <Text style={{fontSize:30}}>{data.title}</Text>
          <Text style={{fontSize:30}}>{data.content}</Text>
        </View>) : null
      }
    </View>
  )
}

export default App;