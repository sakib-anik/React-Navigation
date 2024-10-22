import React,{useState,useEffect} from 'react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './components/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import SettingsScreen from './components/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Component from 'react-native-paper/lib/typescript/components/List/ListItem';
import ProfileScreen from './components/ProfileScreen';
import DetailsScreen from './components/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from './components/UserScreen';
import UpdateProfile from './components/UpdateProfile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminScreen from './components/AdminScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
const StackNav = ()=>{
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return(
    <Stack.Navigator screenOptions={{ 
      statusBarColor: '#0163d2',
      headerShown: true,
      headerStyle:{
        backgroundColor: '#0163d2'
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center'
     }}>
      <Stack.Screen options={{ headerTitle:'Homes',headerLeft: ()=><Icon name="menu" color="#fff" size={30} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} /> }} name='HomeS' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: true }} />
      <Stack.Screen name='User' component={UserScreen} options={{ headerShown: true }} />
      <Stack.Screen name='UpdateProfile' component={UpdateProfile} options={{ headerShown: false }} />
      <Stack.Screen name='LoginUser' component={LoginNav} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const DrawerNav = ()=>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{ headerShown: false, headerTitle: '' }}>
      <Drawer.Screen name="HomeD" component={TabNav} />
    </Drawer.Navigator>
  )
}

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarLabelStyle: {marginBottom: 5, fontSize: 13},
      tabBarStyle: {backgroundColor: '#0163d2'}
     }}>
      <Tab.Screen
        name='Home'
        component={StackNav}
        options={{ 
          tabBarIcon: ({focused,color,size})=>(
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={'white'}
              />
          )
         }}
      />
      <Tab.Screen
        name='User'
        component={UserScreen}
        options={{ 
          tabBarIcon: ({focused,color,size})=>(
            <MaterialCommunityIcons
              name={focused ? 'account-multiple' : 'account-multiple-outline'}
              size={28}
              color={'white'}
              />
          )
         }}
      />
    </Tab.Navigator>
  )
}

const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator screenOptions={{ 
      headerShown: false,
     }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="AdminScreen" component={AdminStack} />
    </Stack.Navigator>
  );
}

const AdminStack = ()=>{
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ 
        statusBarColor: '#0163d2',
        headerShown: true,
        headerBackVisible: false,
        headerStyle:{
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
       }}
       name="AdminScreen" component={AdminScreen} />
      <Stack.Screen options={{ 
        headerShown: false,
       }}
       name='Login' component={LoginNav} />
    </Stack.Navigator>
  )
}

export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(false);
  async function getData(){
    const data = await AsyncStorage.getItem('isLoggedIn');
    const userType1 = await AsyncStorage.getItem('userType');
    setIsLoggedIn(data);
    setUserType(userType1);
  }

  useEffect(()=>{
    getData();
    setTimeout(() => {
      SplashScreen.hide();
    }, 900);
  },[isLoggedIn])
  return (
    <NavigationContainer>
      {isLoggedIn && userType == 'Admin' ? (
        <AdminStack />
      ) : isLoggedIn ? (
        <DrawerNav />
      ) : (
        <LoginNav />
      )}
      <Toast />
    </NavigationContainer>
  );
}