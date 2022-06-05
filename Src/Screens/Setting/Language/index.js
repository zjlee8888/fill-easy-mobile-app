import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "../../Home/Component/Screeheader";
import { useNavigation } from "@react-navigation/native";

//Utility
import { Bordercolor, Textcolor } from "../../../Utility/Colors";
import { Icon } from "react-native-elements";

const lang = [
  {
    name: "English",
   
  },
  {
    name: "繁體",
  
  },
  {
    name: "简体",
   
  },
];
const Language = () => {
  const [current, setCurrent] = useState("English");
  return (
    <View style={{ flex: 1 , backgroundColor:"#FFFFFF" }}>
      <Header title3={"Language"}
      styleView={{paddingHorizontal : 30}} />

      <View style={{ flex: 1, marginTop: 15 }}>
        {lang.map((item, i) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginLeft: 30,
                borderBottomWidth: 1,
                paddingVertical: 15,
                borderColor: Bordercolor.darkgrayopborder,
              }}
              onPress={() => setCurrent(item.name)}
            >
              <View style={{ flex: 1 }}>
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
              </View>
              {item.name == current && (
                <View style={{ marginRight: 30 }}>
                  <Icon
                    name="check"
                    type="antdesign"
                    size={20}
                    color={Bordercolor.yellowborder}
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Language;
