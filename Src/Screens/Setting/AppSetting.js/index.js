import React  , {useState}from "react";
import { View, Text, TouchableOpacity , Switch } from "react-native";
import { Header } from "../../Home/Component/Screeheader";
import { useNavigation } from '@react-navigation/native';

//Utility
import { Bordercolor, Textcolor } from "../../../Utility/Colors";
import { Icon } from "react-native-elements";
const appsetting = [
  {
    name: "Change Password",
    nav: "Language",
  },
  {
    name: "Face ID",
    nav: "Language",
  },
  {
    name: "Language",
    nav: "Language",
  },
  {
    name: "Delete Account",
    nav: "Language",
  },
  {
    name: "Update Version",
    nav: "Language",
  },
];
const Appsetting = () => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flex: 1 }}>
      <Header title3={"App Settings"} />

      <View style={{ flex: 1, marginTop: 15 }}>
        {appsetting.map((item, i) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginLeft: 25,
                borderBottomWidth: 1,
                paddingVertical: 15,
                borderColor: Bordercolor.darkgrayopborder,
              }}
              onPress={() =>navigation.navigate(item.nav)}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: Textcolor.blacktext,
                    fontFamily: "Roboto-Regular",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={{ marginRight: 25 }}>
                {item.name == "Face ID" ? 
                <Switch
                trackColor={{ false: "#4F4F4F", true: "rgb(255, 246, 204)" }}
                thumbColor={isEnabled ? "#FED200" : "#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
                 :
                 <>
                 {item.name == "Update Version" ? 
                  <Icon name="reload1" type="antdesign" size={20}  />
                  :
                
               <Icon name="right" type="antdesign" size={20} />
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
