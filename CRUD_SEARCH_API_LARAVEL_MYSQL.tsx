import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View, Button, TextInput, StyleSheet, TouchableHighlight, Modal } from 'react-native';

const App = (): React.JSX.Element => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser,setSelectedUser] = useState(undefined);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const [errorName,setErrorName] = useState(false);
  const [errorEmail,setErrorEmail] = useState(false);
  const [errorPassword,setErrorPassword] = useState(false);

  const getAPIData = async () => {
    const url = 'http://10.0.2.2:8000/api/users/';
    try {
      let result = await fetch(url);
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      result = await result.json();
      setData(result);
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  };

  const deleteData = async (id)=>{
    const url = "http://10.0.2.2:8000/api/user/"+id;
    let result = await fetch(url,{
      method: 'Delete',
      headers:{"Content-Type":"application/json"},
    });
    result = await result.json();
    getAPIData();
    console.warn(result);
  }

  const saveAPIData = async () => {
    if (user.name == "" || user.email == "" || user.password == "") {
      if (user.name == "") {
        console.warn("Name Field Required!");
        setErrorName(true);
      }else{
        setErrorName(false);
      }
      if (user.email == "") {
        console.warn("Email Field Required!");
        setErrorEmail(true);
      }else{
        setErrorEmail(false);
      }
      if (user.password == "") {
        console.warn("Password Field Required!");
        setErrorPassword(true);
      }else{
        setErrorPassword(false);
      }
      return;
    }else{
      setErrorName(false);
      setErrorEmail(false);
      setErrorPassword(false);
    }
    const url = "http://10.0.2.2:8000/api/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    result = await result.json();
    console.warn(result);
    setData([...data, result]);
    setUser({
      name: "",
      email: "",
      password: ""
    });
    
  };

  function editUser(item) {
    setSelectedUser(item);
    setShowModal(true);
  }

  async function updateUser(item){
    const url = "http://10.0.2.2:8000/api/user/"+item.id;
    let result = await fetch(url,{
      method:'put',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(item)
    });
    result = await result.json();
    setShowModal(false);
    getAPIData();
    console.warn(result);
  }

  async function searchUser(item){
    const url = "http://10.0.2.2:8000/api/users/"+item;
    let result = await fetch(url,{
      method:'get',
      headers:{"Content-Type":"application/json"},
    });
    result = await result.json();
    setData(result);
    console.warn(result);
  }

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 30 }}>API Call</Text>
      <TextInput 
        value={user.name} 
        placeholder="Name" 
        style={[styles.input, errorName && styles.inputError]} 
        onChangeText={(text) => setUser({ ...user, name: text })} 
      />
      {errorName && <Text style={styles.error}>Name Field is required!</Text>}
      
      <TextInput 
        value={user.email} 
        placeholder="Email" 
        style={[styles.input, errorEmail && styles.inputError]} 
        onChangeText={(text) => setUser({ ...user, email: text })} 
      />
      {errorEmail && <Text style={styles.error}>Email Field is required!</Text>}
      
      <TextInput 
        value={user.password} 
        placeholder="Password" 
        style={[styles.input, errorPassword && styles.inputError]} 
        onChangeText={(text) => setUser({ ...user, password: text })} 
        secureTextEntry={true} 
      />
      {errorPassword && <Text style={styles.error}>Password Field is required!</Text>}
      
      <Button title="Save Data" onPress={saveAPIData} />
      <TextInput placeholder='Search Here' style={{borderWidth:2,marginStart:120,marginTop:10,borderRadius:5,borderColor:'skyblue',padding:5,marginBottom:1}} onChangeText={(text)=>searchUser(text)} />
      <View style={{flexDirection:'row',backgroundColor:'orange'}}>
        <Text style={{flex:0.2,textAlign:'center'}}>Id</Text>
        <Text style={{flex:0.5,textAlign:'center'}}>Name</Text>
        <Text style={{flex:1,textAlign:'center'}}>Email</Text>
        <Text style={{flex:1,textAlign:'center'}}>Created At</Text>
        <Text style={{flex:1,textAlign:'center'}}>Operations</Text>
      </View>
      {data.length > 0 && data.map((item,index) => (
        <View style={styles.itemContainer} key={item.id}>
          <Text style={{flex:0.2,textAlign:'center'}}>{index + 1}</Text>
          <Text style={{flex:0.5,textAlign:'center'}}>{item.name}</Text>
          <Text style={{flex:1,textAlign:'center'}}>{item.email}</Text>
          <Text style={{flex:1,textAlign:'center'}}>{item.created_at}</Text>
          <View style={{flex:1,textAlign:'center',flexDirection:'row',marginLeft:20}}><TouchableHighlight onPress={()=>editUser(item)} style={{flex:1}}><Text style={{backgroundColor:'orange',padding:5,textAlign:'center'}}>Edit</Text></TouchableHighlight><TouchableHighlight onPress={()=>deleteData(item.id)} style={{flex:1}}><Text style={{backgroundColor:'orange',padding:5}}>Delete</Text></TouchableHighlight></View>
        </View>
      ))}
      <Modal visible={showModal} transparent={true}>
        <UserModel setShowModal={setShowModal} setUser={setSelectedUser} updateUser={updateUser} selectedUser={selectedUser} />
      </Modal>
    </ScrollView>
  );
};

const UserModel = (props)=>{
  let user = props.selectedUser;
  let setUser = props.setUser;
  let updateUser = props.updateUser;
  return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <TextInput 
          value={user ? user.name : ''} 
          placeholder="Name" 
          style={[styles.input]} 
          onChangeText={(text) => setUser({ ...user, name: text })} 
        />
        <TextInput 
          value={user ? user.email : ''} 
          placeholder="Email" 
          style={[styles.input]} 
          onChangeText={(text) => setUser({ ...user, email: text })} 
        />
        <TextInput 
          value={user ? user.password : ''} 
          placeholder="Password" 
          style={[styles.input]} 
          onChangeText={(text) => setUser({ ...user, password: text })} 
          secureTextEntry={true} 
        />
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:3}}>
          <Button title="Save" onPress={()=>updateUser(user)} />
          <Button title="Close" onPress={()=>props.setShowModal(false)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    margin: 2,
    padding: 8,
    fontSize: 18
  },
  inputError: {
    borderColor: 'red'
  },
  error: {
    color: 'red',
    fontSize: 16,
    margin: 3
  },
  itemContainer: {
    flexDirection:'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginVertical: 10
  },
  item: {
    fontSize: 30,
    backgroundColor: '#ddd',
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:'#fff',
    padding:40,
    borderRadius:10,
    shadowColor:'#000',
    elevation:10,
    shadowOpacity:0.7
  }
});

export default App;
