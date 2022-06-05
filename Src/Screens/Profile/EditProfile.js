import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  Keyboard,
ScrollView
} from "react-native";
import { Header } from "../Home/Component/Screeheader";
import { Icon } from "react-native-elements";
import { TEXT } from "../../Component/Text";
import { Bottom } from "../Home/Component/Todo/buttoncontainer";
import { Textcolor } from "../../Utility/Colors";
import { NavigationContainer } from "@react-navigation/native";
const EditProfile = (props) => {
  const [Htitle5, setHtitle5] = useState("Edit Profile");
  const [textData, setTextData] = useState("HKID");
  const [date, setDate] = useState("");
  const [Surname, setSurname] = useState("");
  const [Document, setDocument] = useState("");
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const radiobuttonData = [
    {
      id: 0,
      name: "HKID",
    },
    {
      id: 1,
      name: "Passport",
    },
    {
      id: 2,
      name: "Other",
    },
  ];
  const DateValidation = (text) => {
    setDate(
      text
        .replace(/^(\d\d)(\d)$/g, "$1/$2")
        .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
        .replace(/[^\d\/]/g, "")
    );
  };
  const handlebutton = (type) => {
    switch (type) {
      case "Profile":
        props.navigation.navigate("Profile");
        break;
      case "Backprofile":
        props.navigation.navigate("Home");
        break;
      default:
        break;
    }
  };
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
      }}
    >
      <Header title3={Htitle5}
              styleView = {{paddingHorizontal:"8%"}} />
      <ScrollView>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView style={{
            flex: 1,
            width: "100%",
            height: "100%",
            
          }} keyboardVerticalOffset={100} behavior={(Platform.OS === 'ios') ? 'padding' : null}>
            <View
              style={{
                marginTop: 35,
                alignSelf: 'center',
                margin: '4%',
                width: "90%",
                borderWidth: 0.6,
                padding:"6%",
               // padding: "3%",
                alignItems: "center",
                borderColor: "#E2E2E2",
                borderRadius: 22,
                backgroundColor: "rgba(255, 255, 255, 1)",
                shadowColor: "rgba(0, 0, 0, 0.05)",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.6,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              <View style={{ ...styles.textcontainer }}>
                <View style={{ width: "50%" }}>
                  <TEXT
                    title="English Surname"
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  <TextInput
                    placeholder="LEE"
                    value={Surname}
                    onChangeText={(value) => setSurname(value)}
                    style={{
                      marginTop: Platform.OS == "android" ? 0 : 10,
                      fontSize: 15,
                    }}
                    placeholderTextColor="rgba(0, 0, 0, 1)"
                  />
                </View>

                <View style={{ width: "50%" }}>
                  <TEXT
                    title="Give Name"
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  <TextInput
                    placeholder="Matthew"
                    value={name}
                    onChangeText={(value) => setName(value)}
                    style={{
                      marginTop: Platform.OS == "android" ? 0 : 10,
                      fontSize: 15,
                    }}
                    placeholderTextColor="rgba(0, 0, 0, 1)"
                  />
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#dddddd",
                  marginBottom: 2,
                  marginTop: 8,
                  // paddingVertical:10,
                  paddingVertical: Platform.OS == "android" ? 0 : 15,
                }}
              >
                <View style={{ width: "100%" }}>
                  <TEXT
                    title="ID Document Type"
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                      marginBottom: "4%",
                    }}
                  >
                    {radiobuttonData.map((item) => (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            borderWidth: 5,
                            borderColor: "#0000000F",
                            backgroundColor: "#0000000F",
                            height: 24,
                            width: 24,
                            marginRight: "10%",
                          }}
                          onPress={() => setTextData(item.name)}
                        >
                          <View
                            style={{
                              width: 14,
                              height: 14,
                              backgroundColor:
                                item.name == textData ? "#2B299E" : "#ffffff",
                              borderRadius: 14 / 2,
                            }}
                          ></View>
                        </TouchableOpacity>
                        <TEXT
                          title={item.name}
                          size={15}
                          color={Textcolor.blacktext}
                        />
                      </View>
                    ))}
                  </View>
                </View>
                <View style={{ flexDirection: "row" ,marginTop:8}}>
                  <View style={{ width: "50%" }}>
                    <TEXT
                      title="ID Document No."
                      size={14}
                      color="rgba(43, 41, 158, 1)"
                      weight={"bold"}
                    />
                    <TextInput
                      placeholder="Y123456(1)"
                      value={Document}
                      onChangeText={(value) => setDocument(value)}
                      style={{
                        marginTop: Platform.OS == "android" ? 0 : 10,
                        fontSize: 15,
                      }}
                      placeholderTextColor="rgba(0, 0, 0, 1)"
                    />
                  </View>

                  <View style={{ width: "50%" }}>
                    <TEXT
                      title="Contact no."
                      size={14}
                      color="rgba(43, 41, 158, 1)"
                      weight={"bold"}
                    />
                    <TextInput
                      placeholder="+852 12345678"
                      value={Contact}
                      onChangeText={(value) => setContact(value)}
                      style={{
                        marginTop: Platform.OS == "android" ? 0 : 10,
                        fontSize: 15,
                      }}
                      keyboardType={"number-pad"}
                      maxLength={10}
                      placeholderTextColor="rgba(0, 0, 0, 1)"
                    />
                  </View>
                </View>
              </View>
              <View style={{ ...styles.textcontainer }}>
                <View style={{ width: "100%" ,marginTop:15}}>
                  <TEXT
                    title="Date of birth"
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  <TextInput
                    placeholder="08 / 01 / 2022"
                    value={date}
                    onChangeText={(text) => {
                      DateValidation(text, "date");
                    }}
                    keyboardType="number-pad"
                    dataDetectorTypes={true}
                    maxLength={10}
                    style={{
                      marginTop: Platform.OS == "android" ? 0 : 10,
                      fontSize: 15,
                    }}
                    placeholderTextColor="rgba(0, 0, 0, 1)"
                  />
                </View>
              </View>

              <View style={{ ...styles.textcontainer }}>
                <View style={{ width: "100%" , marginTop:15 }}>
                  <TEXT
                    title="Email"
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  <TextInput
                    placeholder="matthewlee@gmail.com"
                    value={Email}
                    onChangeText={(value) => setEmail(value)}
                    style={{
                      marginTop: Platform.OS == "android" ? 0 : 10,
                      fontSize: 15,
                    }}
                    placeholderTextColor="rgba(0, 0, 0, 1)"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 15,
                width: "100%",
                alignItems: "center",
                alignSelf: "center",
                marginBottom: 25,
              }}
            >
              <Bottom
                handlebutton={handlebutton}
                contiue="Profile"
                back="Backprofile"
                type="Save"
                style={{ justifyContent: "space-evenly" }}
              />
            </View>
          </KeyboardAvoidingView>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default EditProfile;
const styles = StyleSheet.create({
  textcontainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#dddddd",
    paddingBottom:12
   // marginBottom: 2,
   // marginTop: 8,
    // paddingVertical:10,
   // paddingVertical: Platform.OS == "android" ? 0 : 15,
  },
});