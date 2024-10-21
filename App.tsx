import * as React from 'react';
import HomeScreen from './components/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import SettingsScreen from './components/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Component from 'react-native-paper/lib/typescript/components/List/ListItem';
import ProfileScreen from './components/ProfileScreen';
import DetailsScreen from './components/DetailsScreen';

export default function App(){
  const TabNav = createBottomTabNavigator();
  const tabConfig=[
    {
      name:"Home",
      component:HomeScreen,
      focusedIcon:'home',
      unfocusedIcon:'home-outline',
      iconComponent:Ionicons
    },
    {
      name:"Profile",
      component:ProfileScreen,
      focusedIcon:'user',
      unfocusedIcon:'user-o',
      iconComponent:FontAwesome
    },
    {
      name:"Details",
      component:DetailsScreen,
      focusedIcon:'file-text',
      unfocusedIcon:'file-text-o',
      iconComponent:FontAwesome
    },
    {
      name:"Settings",
      component:SettingsScreen,
      focusedIcon:'settings',
      unfocusedIcon:'settings-outline',
      iconComponent:Ionicons
    },
  ];
  const screenOptions = ({route})=>({
    tabBarIcon: ({focused, color, size})=>{
      const routeConfig = tabConfig.find(config => config.name === route.name);
      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <IconComponent name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'orange',
    tabBarInactiveTintColor: 'black',
    tabBarLabelStyle:{
      fontSize: 14,
      paddingBottom: 5,
      fontWeight: 600
    },
    tabBarStyle:{
      height:60,
      paddingTop:0
    }
  });
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOptions={screenOptions}>
        {tabConfig.map(routeConfig => (
          <TabNav.Screen key={routeConfig.name} name={routeConfig.name} component={routeConfig.component} />
        ))}
      </TabNav.Navigator>
    </NavigationContainer>
  );
}