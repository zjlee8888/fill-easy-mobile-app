/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from "react";
 import {
   View,
   Text,
   TextInput,
   SafeAreaView,
   Platform,
   Image,
 } from "react-native";
 import { NavigationContainer } from "@react-navigation/native";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
 //Screens
 import LoginScreen from "./Src/Screens/Login/Login";
 import OtpVerification from "./Src/Screens/Login/OtpVerification";
 import Home from "./Src/Screens/Home/Home";
 import Stacknavigation from "./Src/Navigation/Stacknavigation";
 
 import { createStore } from "redux";
 import { Provider } from "react-redux";
 import rootReducer from "./Src/Redux/store/Reducers/rootReducer";
 
 const store = createStore(rootReducer);
 
 const Splash = () => {
   return (
     <View style={{ alignItems: "center", justifyContent: "center" }}>
       <Image
         source={require("./assets/Image/splash.png")}
         style={{ width: "100%", height: "100%" }}
       />
     </View>
   );
 };
 
 const App = () => {
   const [show, setShow] = useState(true);
 
   useEffect(() => {
     setTimeout(() => {
       setShow(false);
     }, 1000);
   }, []);
 
   return (
     <Provider store={store}>
       {Platform.OS == "android" ? (
         show ? (
           <Splash />
         ) : (
           <Stacknavigation />
         )
       ) : (
         <Stacknavigation />
       )}
     </Provider>
 
     // <Stacknavigation />
   );
 };
 
 export default App;
 
