import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActivityRecord from "../Screens/Activity/Activity";
import QrcodeScreen from "../Screens/QRSceen/QRcodeScanScreen";
import LoginScreen from "../Screens/Login/Login";
import Tabnavigation from "./Tabnavigation";
import Tasklist from "../Screens/Home/Tasklist";
import TodoScreen from "../Screens/Home/Todo";
import BlogPosts from "../Screens/Home/BlogPosts";
import EditProfile from "../Screens/Profile/EditProfile";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, View } from "react-native";
const Stack = createNativeStackNavigator();
import Setting from "../Screens/Setting/SettingScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../Screens/Loader/Loader";
import { Allblogpost } from '../Helper/Blogpost'

const Preauth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="LoginScreen"
    >
       {/* <Stack.Screen name="LoaderScreen" component={LoaderScreen} /> */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Postauth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabScreen"
    >
    
      <Stack.Screen name="TabScreen" component={Tabnavigation} />
      <Stack.Screen name="Tasklist" component={Tasklist} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
      <Stack.Screen name="Activity" component={ActivityRecord} />
      <Stack.Screen name="QrcodeScreen" component={QrcodeScreen} />
      <Stack.Screen name="BlogPosts" component={BlogPosts} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default function Stacknavigation() {
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[isLoading]);

  const LoaderScreen = () => {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  };


  const token = useSelector((state) => state.userReducer.userToken);

  const dispatch = useDispatch();

  const AuthChecker = async () => {
    try {
      let accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken !== null) {
        dispatch({
          type: "SET_TOKEN",
          payload: accessToken,
        });

        Allblogpost(dispatch , token)
        
       
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  

  useEffect(() => {
    AuthChecker();
  }, [token]);
  return (
    <NavigationContainer>
      {isLoading == true ? (
       LoaderScreen()
      ): 
      token == "" ? <Preauth /> : <Postauth />}
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading == true ? (
          <Stack.Screen name="LoaderScreen" component={LoaderScreen} />
        ) : null}
        {token == "" ? (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        ) : (
          // <Stack.Screen name="Auth" component={Preauth} />.
          <Postauth />
          // <Stack.Screen name="Postauth" component={Postauth} />
        )}
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
