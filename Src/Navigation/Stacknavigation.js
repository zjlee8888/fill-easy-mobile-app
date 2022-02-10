import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import LoginScreen from '../Screens/Login/Login'
import OtpVerification from '../Screens/Login/OtpVerification'
import Tabnavigation from './Tabnavigation'
import Home from '../Screens/Home/Home'


const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="TabScreen">
      <Stack.Screen name="TabScreen" component={Tabnavigation} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
    
   
  );
}

export default Stacknavigation;