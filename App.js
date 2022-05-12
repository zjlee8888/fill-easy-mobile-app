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

 
 //Screens

 import Stacknavigation from "./Src/Navigation/Stacknavigation";
 
 import { createStore } from "redux";
 import { Provider } from "react-redux";
 import store from "./Src/Redux/store/index";
 
 //const store = createStore(rootReducer);
 
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
 