import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens

import Home from '../Screens/Home/Home'
import Flag from '../Screens/Flag/Flag'
import Profile from '../Screens/Profile/Profile'
import ActivityRecord from '../Screens/Activity/Activity'
// import History from '../Screens/History/History'

import { Tabbar } from './Tabbar'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, }} tabBar={() => <Tabbar />}>
            <Tab.Screen name="Home" component={Home} />
           

        </Tab.Navigator>
    );
}

export default Tabnavigation;