import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityRecord from '../Screens/Activity/Activity'

//Screens
import LoginScreen from '../Screens/Login/Login'
import OtpVerification from '../Screens/Login/OtpVerification'
import Tabnavigation from './Tabnavigation'
import Home from '../Screens/Home/Home'
import Tasklist from '../Screens/Home/Tasklist'
import TodoScreen from '../Screens/Home/Todo'


const Stack = createNativeStackNavigator();

const Preauth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpVerification} />
    </Stack.Navigator>
  );
}

const Postauth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabScreen1">
      <Stack.Screen name="TabScreen1" component={Tabnavigation} />
      <Stack.Screen name="Tasklist" component={Tasklist} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
      <Stack.Screen name="Activity" component={ActivityRecord} />

    </Stack.Navigator>
  );
}

const Stacknavigation = () => {
  const [authtoken, SetAuthtoken] = useState("")
  console.log("HElllo")

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
        {authtoken == "" ?
          <>
            <Stack.Screen name="Auth" component={Preauth} />
            <Stack.Screen name="TabScreen" component={Postauth} />
          </>
          :
          <Stack.Screen name="Auth" component={Postauth} />
        }

      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default Stacknavigation;