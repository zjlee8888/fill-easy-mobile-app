import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Component/Screeheader";
// import { Textcolor } from '../../Utility/Colors'
import { Icon } from "react-native-elements";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//components
import { TEXT } from "../../Component/Text";
import { BUTTON, Button } from "../../Component/Button";
import { Colors } from "../../Utility/Colors";
import { Backgroundcolor, Bordercolor, Textcolor } from "../../Utility/Colors";

const documents = [
  {
    name: "HKID Copy",
    type: "HKIDCOPY.PNG",
  },
  {
    name: "Address Statement",
    type: "ADDRESSSTATEMENT.PNG",
  },
];

const Bank = [
  {
    name: "HSBC",
    type: "INSURANCE",
  },
  {
    name: "DBS",
    type: "INSURANCE",
  },
  {
    name: "FUBON BANK",
    type: "INSURANCE",
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("My Forms");
  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
     
       
        <LinearGradient
          colors={["#FED200", "#FED200", "#FFFFFF"]}
          style={styles.linearGradient}
        >
          <View
            style={{
              height: 300,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 50,
                alignItems:'center',
                width:'90%',
                alignSelf:'center',
                justifyContent:'space-between',
                height:'10%',
                // borderWidth: 1,

              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent:'flex-start',
                  width: '20%',
                //   borderWidth: 1,
                }}
                onPress={() =>
                  // Alert.alert("Navigation Screen under Production....")
                  navigation.navigate("Home")
                }
              >
                <Icon name="arrowleft" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width:'20%',
                //   borderWidth: 1,
                }}
                onPress={() => navigation.navigate("Setting")}
              >
                <Icon name="settings" 
                type="simple-line-icon" 
                size={20} />
              </TouchableOpacity>
            </View>
            <TEXT
              style={{
                textAlign: "center",
                marginTop: 20,
              }}
              title={"Matthew Lee"}
              size={18}
              color={"rgba(0, 0, 0, 1)"}
              family="Poppins-SemiBold"
            />
            <TEXT
              style={{
                textAlign: "center",
                marginTop: 10,
                marginBottom: 20,
              }}
              color={"rgba(0, 0, 0, 1)"}
              title={"+852 12345678   |   matthewlee@gmail.com"}
              size={12}
              family="Poppins-Regular"
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                // marginLeft: '70%',
                backgroundColor: "#2B299E",
                justifyContent: "center",
                height: 40,
                width: 146,
                alignSelf: "center",
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <TEXT
                color={"white"}
                title={"Edit Profile"}
                size={14}
                family="Poppins-Bold"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 60,
              flexDirection: "row",
              // backgroundColor: 'red',
            }}
          >
            <Image
              style={{
                resizeMode: "cover",
              }}
              source={require("../../../assets/Image/curve.png")}
            />
            {/* </ImageBackground> */}
          </View>
        </LinearGradient>
        <View
          style={{
            backgroundColor: "#F2F4F3",
            marginLeft: 30,
          }}
        >
          <TEXT
            title={"My Documents"}
            size={18}
            color={Textcolor.bluetext}
            family="Roboto-Black"
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            width: "90%",
            alignSelf: "center",
            marginTop: "5%",
            elevation:5,
            shadowOffset:{
              width:0,
              height:0
            },
            shadowColor:"rgba(70, 88, 131, 0.13)"
          }}
        >
          {documents.map((item, i) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  padding: "4%",
                  justifyContent: "space-between",

                }}
              >
                <View style={{
                    width: '60%',
                    justifyContent:'center'
                }}>
                  <TEXT
                  style={{marginVertical:'2%'}}
                    title={item.name}
                    size={16}
                    color={Textcolor.blacktext}
                    family="Roboto-Black"
                  />
                  <TEXT
                    title={item.type}
                    size={12}
                    color={"rgba(191, 191, 191, 1)"}
                    family="Roboto-Regular"
                  />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(164, 164, 164, 1)",
                    width: 96,
                    height: 32,
                    flexDirection: "row",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TEXT
                    title={"Upload"}
                    size={11}
                    color={"white"}
                    family="Roboto-Black"
                  />
                  <Icon
                  style={{
                      marginLeft: 5,
                  }}
                    name="upload"
                    type="antdesign"
                    size={15}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View
          style={{
            backgroundColor: "#F2F4F3",
            marginLeft: 30,
            marginVertical: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 20,
          }}
        >
        
          <TEXT
            title={"Linked Company"}
            size={18}
            color={Textcolor.bluetext}
            family="Roboto-Black"
          />
          <TEXT
            title={"see all>"}
            size={14}
            color={Textcolor.bluetext}
            family="Roboto-Regular"
          />
        </View>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
          {Bank.map((item) => (
            <View
              style={{
                flexDirection: "row",
                padding: "4%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                    
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#A4A4A4",
                  opacity: 0.20,
                }}
              ></View>
              <View style={{ width: "50%", 
              marginLeft: "2%",
              justifyContent: "center",
            //   borderWidth: 1,
             
               }}>
              
                <TEXT
                style={{
                    paddingBottom: 5,
                }}
                  title={item.name}
                  size={16}
                  color={Textcolor.blacktext}
                  family="Roboto-Black"
                />
                <TEXT
                  title={item.type}
                  size={12}
                  color={"rgba(191, 191, 191, 1)"}
                  family="Roboto-Regular"
                />
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 50,
                  borderColor: "rgba(164, 164, 164, 1)",
                  borderWidth: 2,
                  padding: "2%",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TEXT
                  title={"Unlink"}
                  size={13}
                  color={"#A4A4A4"}
                  // style={{ opacity: 0.6899999976158142 }}
                  family="Roboto-Black"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View
          style={{
            backgroundColor: "#F2F4F3",
            marginLeft: 30,
            marginVertical: "5%",
            flexDirection: "row",
            justifyContent: "space-between",

            marginRight: 20,
          }}
        >
          <TEXT
            title={"My Forms"}
            size={18}
            color={Textcolor.bluetext}
            family="Roboto-Black"
          />
          <TEXT
            title={"see all>"}
            size={14}
            color={Textcolor.bluetext}
            family="Roboto-Regular"
          />
        </View>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "rgba(255, 255, 255, 1)",
            marginBottom:Platform.OS==='ios'?0:'10%'
          }}
        >
          {Bank.map((item) => (
            <View
              style={{
                flexDirection: "row",
                padding: "4%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: "2%",
                }}
              >
                <Icon
                  name="text-box-multiple-outline"
                  type="material-community"
                  size={50}
                />
              </View>
              <View style={{ width: "50%", marginLeft: "2%" }}>
                <TEXT
                style={{
                    marginBottom: 5,
                }}
                  title={item.name}
                  size={16}
                  color={Textcolor.blacktext}
                  family="Roboto-Black"
                />
                <TEXT
                  title={item.type}
                  size={12}
                  color={"rgba(191, 191, 191, 1)"}
                  family="Roboto-Regular"
                />
              </View>
              <TouchableOpacity
                style={{
                  padding: "2%",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="cloud-download-outline"
                  type="material-community"
                  size={35}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
    
    </View>
    </ScrollView>
  );
};
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

export default Profile;