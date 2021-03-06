import React, { useState } from "react";
import { View, Text, TextInput, ScrollView ,TouchableOpacity} from "react-native";
import { TEXT } from "../../Component/Text";
import { Header } from "../Home/Component/Screeheader";
import { Icon } from "react-native-elements";

const Setting = () => {
  const [Htitle4, setHtitle4] = useState("Settings");
  const settingData = [
    {
      id: 0,
      name: "iAM Smart Account",
    },
    {
      id: 1,
      name: "Notifications",
    },
    {
      id: 2,
      name: "App Settings",
    },
    {
      id: 3,
      name: "Privacy, Terms & Conditions",
    },
    {
      id: 4,
      name: "Need Help?",
    },
    {
      id: 5,
      name: "Contact Us",
    },
  ];
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F2F4F3",
      }}
    >
      <View style={{ alignItems:"flex-end" }}>
        <Header title3={Htitle4} />
        <View style={{ width: "95%",marginTop: "3%" }}>
          {settingData.map((item) => (
            <View
              style={{
                padding:'3%',
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems:'center',
                borderBottomWidth: 1 ,
                borderColor:"#EAEAE8",

              }}
            >
              <TEXT title={item.name}  size={16}
                    color={"#0A0A0A"}
                    family="Roboto-Regular" />
              <TouchableOpacity>
                <Icon name="chevron-right" type="feather" size={24} />
              </TouchableOpacity>
            </View>
          ))}
          <View style={{
                padding:'3%',
                flexDirection: "row",
                alignItems:'center',
                borderBottomWidth: 1 ,
                borderColor:"#EAEAE8",
                justifyContent:'space-between'

              }}>
                  <View style={{flexDirection:'row'}}> 
              <TEXT
              title={"About"}  size={16}
              color={"#0A0A0A"}
              family="Roboto-Regular" 
              />
               <TEXT
              title={"FillEasy"}  size={16}
              color={"#FED200"}
              family="Roboto-Regular"
              weight={"bold"} 
              style={{marginLeft:5,textDecorationLine:'underline'}}
              />
              </View>
              <TEXT
              title={"Version 1.0"}  size={14}
              color={"#0A0A0A"}
              family="Roboto-Regular" 
              />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;