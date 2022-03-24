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
import { ActivityIndicator ,View} from "react-native";
const Stack = createNativeStackNavigator();
import Setting from "../Screens/Setting/SettingScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../Screens/Loader/Loader";



 
const Preauth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Postauth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabScreen1"
    >
      <Stack.Screen name="TabScreen1" component={Tabnavigation} />
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
  const LoaderScreen = ()=>{
  
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
          }, 200);
    })
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator />
    </View>
    )
    }
  useEffect(() => {
    AuthChecker();
     }, [token]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userInfo.userToken);
  const AuthChecker = async () => {
    console.log("Hello auth")
    
    try {
      let accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken !== null) {
        dispatch({
          type: "SET_TOKEN",
          payload: accessToken,
        });
      }
    } catch (e) {
      console.log("Error", e);
    }
  };




  console.log("token==>",token)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
     {isLoading== true ? <Stack.Screen name="LoaderScreen" component={LoaderScreen} />:null}
        {token.length > 0 ? (
          <Stack.Screen name="Postauth" component={Postauth} />
        ) : (
          <Stack.Screen name="Auth" component={Preauth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};