import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { Header } from "../../Home/Component/Screeheader";
import { useNavigation } from "@react-navigation/native";

//Utility
import { Bordercolor, Textcolor } from "../../../Utility/Colors";
import { Icon } from "react-native-elements";

const Notify = [
  {
    name: "App Notifications",
   
  },
  {
    name: "Receive Email",
  
  },
  {
    name: "Receive Notifications",
  
  },
];
const Notification = () => {
  const [current, setCurrent] = useState("English");

  const [appEnabled, setAppEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [notifyEnabled, setNotifyEnabled] = useState(false);
  const toggleApp = () => setAppEnabled(previousState => !previousState);
  const toggleEmail = () => setEmailEnabled(previousState => !previousState);
  const toggleNotify= () => setNotifyEnabled(previousState => !previousState);  return (
    <View style={{ flex: 1 }}>
      <Header title3={"Notifications"}
      styleView={{paddingHorizontal : 30}} />

      <View style={{ flex: 1, marginTop: 15 }}>
        <View style={styles.viewContain}>
          <View style={{ flex: 1 }}>
            <Text
              style={styles.textview}
            >
              APP Notifications
            </Text>
          </View>
          <View style={{ marginRight: 30 }}>
            <Switch
              trackColor={{ false: "#4F4F4F", true: "#FFF6CC" }}
              thumbColor={appEnabled ? "#FED200" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleApp}
              value={appEnabled}
            />
          </View>
        </View>

        <Text style={{fontSize:12 , color:"rgba(56, 56, 56, 0.62)" , marginLeft:25,marginVertical:15}}>Latest updates 2022-02-08 16:15:42</Text>


        <View style={{...styles.viewContain , borderBottomWidth:0, marginTop:15}}>
          <View style={{ flex: 1 }}>
            <Text
              style={styles.textview}
            >
              Receive Email
            </Text>
          </View>
          <View style={{ marginRight: 30 }}>
            <Switch
              trackColor={{ false: "#4F4F4F", true: "#FFF6CC" }}
              thumbColor={emailEnabled ? "#FED200" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleEmail}
              value={emailEnabled}
            />
          </View>
        </View>

        <View style={{...styles.viewContain,  borderBottomWidth:0}}>
          <View style={{ flex: 1 }}>
            <Text
              style={styles.textview}
            >
             Receive Notifications
            </Text>
          </View>
          <View style={{ marginRight: 30 }}>
            <Switch
              trackColor={{ false: "#4F4F4F", true: "#FFF6CC" }}
              thumbColor={notifyEnabled ? "#FED200" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleNotify}
              value={notifyEnabled}
            />
          </View>
        </View>

      </View>




      {/* <View style={{ flex: 1, marginTop: 15 }}>
        {Notify.map((item, i) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginLeft: 25,
                borderBottomWidth: 1,
                paddingVertical: 15,
                borderColor: Bordercolor.darkgrayopborder,
              }}
              onPress={() => navigation.navigate(item.nav)}
            >
              <View style={{flex:1,backgroundColor:"pink" }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: Textcolor.blacktext,
                    fontFamily: "Roboto-Regular",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              
                <View style={{ marginRight: }}>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              
            </TouchableOpacity>
          );
        })}
      </View> */}
    </View>
  );
};


const styles = StyleSheet.create({
  viewContain: {
    flexDirection: "row",
    marginLeft: 30,
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderColor: Bordercolor.darkgrayopborder,
  },
  textview: {
    fontSize: 16,
    color: "#0A0A0A",
    fontFamily: "Roboto-Regular",
    letterSpacing:0.39
  },

})
export default Notification;