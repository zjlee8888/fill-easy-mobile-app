import React  , {useState}from "react";
import { View, Text, TouchableOpacity , Switch, Alert } from "react-native";
import { Header } from "../../Home/Component/Screeheader";
import { useNavigation } from '@react-navigation/native';

//Utility
import { Bordercolor, Textcolor } from "../../../Utility/Colors";
import { Icon } from "react-native-elements";
const appsetting = [
  {
    name: "Change Password",
    nav: "pro",
  },
  {
    name: "Face ID",
    nav: "pro",
  },
  {
    name: "Language",
    nav: "Language",
  },
  {
    name: "Delete Account",
    nav: "pro",
  },
  {
    name: "Update Version",
    nav: "pro",
  },
];
const Appsetting = () => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleClick = (val) =>{
      if(val == "Language"){
        navigation.navigate(val)
      }else{
        Alert.alert("Under Production....")
      }
    }
  return (
    <View style={{ flex: 1 , backgroundColor:"#fffff" }}>
      <Header title3={"App Settings"}
      styleView={{paddingHorizontal : 25}} />

      <View style={{ flex: 1, marginTop: 15 }}>
        {appsetting.map((item, i) => {
          const val = item.nav
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginLeft: 25,
                borderBottomWidth: 1,
                paddingVertical: 15,
                borderColor: Bordercolor.darkgrayopborder,
              }}
              onPress={() =>handleClick(val)}
            >
             
              <View style={{ flex: 1 ,justifyContent:"center" }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#0A0A0A",
                    fontFamily: "Roboto-Regular",
                    letterSpacing:0.39
                  }}
                >
                  {item.name}
                </Text>

                {item.name == "Update Version" && 
                 <Text
                 style={{
                   fontSize: 12,
                   color: "rgba(56, 56, 56, 0.62)",
                   fontFamily: "Roboto-Regular",
                   marginTop:10
                 }}
               >Latest updates 2022-02-08 16:15:42</Text>
                               }
              </View>
              <View style={{ marginRight: 25 }}>
                {item.name == "Face ID" ? 
                <Switch
                trackColor={{ false: "#4F4F4F", true: "#FFF6CC" }}
                thumbColor={isEnabled ? "#FED200" : "#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
                 :
                 <>
                 {item.name == "Update Version" ? 
                  <Icon name="reload1" type="antdesign" size={16}  />
                  :
                
               <Icon name="right" type="antdesign" size={16} />
              }
                 </>
              }
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Appsetting;
