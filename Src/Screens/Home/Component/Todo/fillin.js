import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  ScrollView,
  TabBarIOSItem,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Textcolor } from "../../../../Utility/Colors";
import { Header } from "../../Component/Screeheader";
import { TEXT } from "../../../../Component/Text";
import { Icon } from "react-native-elements";
import { BUTTON } from "../../../../Component/Button";
import { FillinAddress } from "./FillinAddress";

import { Bottom } from "../Todo/buttoncontainer";
const data = [
  {
    name: "Service",
    color: "25%",
  },
  {
    name: "Companies",
    color: "50%",
  },
  {
    name: "Fill-in",
    color: "75%",
  },
  {
    name: "Finished!",
    color: "100%",
  },
];

const ID = [
  {
    id: 1,
    type: "HKID",
  },
  {
    id: 2,
    type: "Passport",
  },
  {
    id: 3,
    type: "Others",
  },
];

export const Fillin = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [open, setOpen] = useState("Fill-in");

  const [effect, setEffect] = useState(true);

  const [date, setDate] = useState("");
  const [Ename, setEname] = useState("");
  const [Gname, setGname] = useState("");
  const [idtype, setIdtype] = useState("HKID");
  const [iddocument, setIddocument] = useState("");
  const [effetdate, setEffectdate] = useState("");
  const DateValidation = (text, field) => {
    if (field == "date") {
      setDate(
        text
          .replace(/^(\d\d)(\d)$/g, "$1/$2")
          .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
          .replace(/[^\d\/]/g, "")
      );
    }

    if (field == "effetdate") {
        
        setEffectdate(
            text.replace(/^(\d\d)(\d)$/g, "$1/$2")
            .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
            .replace(/[^\d\/]/g, "")
            )

    }
  };
  return (
    // <View>

    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
          <View
            style={{
              marginTop: "4%",
              width: "92%",
              borderColor: "rgba(226, 226, 226, 1)",
              borderWidth: 1,
              borderRadius: 22,
              backgroundColor: "white",
              shadowColor: "rgba(0, 0, 0, 0.04)",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.9,
              shadowRadius: 4,
              elevation: 25,
              padding: 20,
            }}
          >
            <TEXT
              title="Date"
              size={14}
              color={Textcolor.bluetext}
              weight={"bold"}
            />

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                borderColor: "rgba(226, 226, 226, 0.5)",
                paddingVertical: Platform.OS == "android" ? 0 : 12,
              }}
            >
              {/* <TextInput
                             placeholder="08/01/2022"
                                placeholderTextColor="rgba(164, 164, 164, 1)"
                              value={data}
                                onChangeText={value => setDate(value)}
                                style={{ fontSize: 14, color: Textcolor.blacktext }}
                             //   keyboardType="numeric"
                                dataDetectorTypes={true}
                            /> */}
              <TextInput
                placeholder="08/01/2022"
                placeholderTextColor="rgba(0, 0, 0, 1)"
                value={date}
                onChangeText={(text) => {
                  DateValidation(text, "date");
                }}
                style={{ fontSize: 14, color: Textcolor.blacktext }}
                keyboardType="number-pad"
                dataDetectorTypes={true}
                maxLength={10}
              />
              {/* 
                            <DateInput
                                inputProps={
                                   
                                    placeholder="08/01/2022",
                                    placeholderTextColor="rgba(164, 164, 164, 1)",
                                    value={data},
                                  //  onChangeText={value => setDate(value)},
                                 //   style={{ fontSize: 14, color: Textcolor.blacktext }},
                                    keyboardType="numeric"
                                }
                                dateFormat={'DD/MM/YYYY'}
                                 defaultValue={"08/01/2022"}
                                // defaultDate={new Date(dayjs().subtract(5, 'year'))}
                                // minimumDate={new Date(dayjs().subtract(10, 'year'))}
                                // maximumDate={new Date()}
                                 handleChange={value => setDate(value)}
                                // onRef={(input) => (dateInput = input)}
                            /> */}
            </View>

            {/* <View style={{
                        height: 20,
                    }}>
                        </View> */}

            <View
              style={{
                // height: 80,
                borderTopWidth: 1,
                paddingTop: 15,
                borderColor: "#DDDDDD",
              }}
            >
              <TEXT
                title='The following fields are all mandatory fields to fill in your form.
                                For fields regarding Chinese names: these fields are only mandatory for users.who have a
                                Chinese name on their ID documents. If you do not have a Chinese name on your
                                ID document, please type "N/A" and move on the next relevant field.'
                size={9}
                color={"#A4A4A4"}
                fontFamily={"Roboto-Regular"}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: "100%",
                marginTop: 20,
              }}
            >
              <View style={{ width: "50%" }}>
                <TEXT
                  title="English Surname"
                  size={14}
                  color={Textcolor.bluetext}
                  weight={"bold"}
                />
              </View>
              <View style={{ width: "50%" }}>
                <TEXT
                  title="Given Name"
                  size={14}
                  color={Textcolor.bluetext}
                  weight={"bold"}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: Platform.OS == "android" ? 0 : 10,
              }}
            >
              <View
                style={{
                  width: "50%",
                }}
              >
                <TextInput
                  placeholder="LEE"
                  value={Ename}
                  placeholderTextColor="rgba(0, 0, 0, 1)"
                  onChangeText={(value) => setEname(value)}
                  style={{ fontSize: 14, color: Textcolor.blacktext }}
                />
              </View>

              <View
                style={{
                  width: "50%",
                }}
              >
                <TextInput
                  placeholder="Matthew"
                  value={Gname}
                  placeholderTextColor="rgba(0, 0, 0, 1)"
                  onChangeText={(value) => setGname(value)}
                  style={{ fontSize: 14, color: Textcolor.blacktext }}
                />
              </View>
            </View>

            <View
              style={{
                paddingTop: 20,
                marginTop: 10,
                borderTopWidth: 1,
                borderColor: "#DDDDDD",
              }}
            >
              <TEXT
                title="ID Document Type"
                size={14}
                color={Textcolor.bluetext}
                weight={"bold"}
              />
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              {ID.map((item, i) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        borderRadius: 15,
                        borderWidth: 5,
                        borderColor: "#0000000F",
                        backgroundColor: "#0000000F",
                        //  opacity: 0.9,
                        height: 24,
                        width: 24,
                      }}
                      onPress={() => setIdtype(item.type)}
                    >
                      <View
                        style={{
                          width: 14,
                          height: 14,
                          backgroundColor:
                            item.type == idtype ? "#2B299E" : "#ffffff",
                          borderRadius: 14 / 2,
                        }}
                      ></View>
                    </TouchableOpacity>
                    <TEXT
                      title={item.type}
                      color={"rgba(0, 0, 0, 1)"}
                      style={{ marginLeft: 8 }}
                    />
                  </View>
                );
              })}
            </View>

            <TEXT
              title="ID Document No."
              size={14}
              color={Textcolor.bluetext}
              weight={"bold"}
              style={{ marginTop: 15 }}
            />

            <View
              style={{
                marginTop: Platform.OS == "android" ? 0 : 10,
                width: "50%",
                borderBottomWidth: 0.5,
                borderColor: "#DDDDDD",
                paddingBottom: Platform.OS == "android" ? 0 : 10,
              }}
            >
              <TextInput
                placeholder="Y123456(1)"
                placeholderTextColor="rgba(164, 164, 164, 1)"
                value={iddocument}
                onChangeText={(value) => setIddocument(value)}
                style={{ fontSize: 14, color: Textcolor.blacktext }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                width: "100%",
              }}
            >
              <View
                style={{
                  marginTop: 7,
                  width: "50%",
                }}
              >
                <TEXT
                  title="Effective Date"
                  size={14}
                  color={Textcolor.bluetext}
                  weight={"bold"}
                />
              </View>
              <View
                style={{
                  marginTop: 7,
                  width: "50%",
                }}
              >
                <TEXT
                  title="With Effect From"
                  size={14}
                  color={Textcolor.bluetext}
                  weight={"bold"}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  borderWidth: 5,
                  borderColor: "#0000000F",
                  backgroundColor: "#0000000F",
                  //  opacity: 0.9,
                  height: 24,
                  width: 24,
                  marginRight: 10,
                }}
                onPress={() => setEffect(true)}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: effect ? "#2B299E" : "#ffffff",
                    borderRadius: 14 / 2,
                  }}
                ></View>
              </TouchableOpacity>

              <TEXT
                title="Immediate"
                size={14}
                color={Textcolor.blacktext}
                // weight={'bold'}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%", flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    borderWidth: 5,
                    borderColor: "#0000000F",
                    backgroundColor: "#0000000F",
                    //  opacity: 0.9,
                    height: 24,
                    width: 24,
                    marginRight: 10,
                  }}
                  onPress={() => setEffect(false)}
                >
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      backgroundColor: effect ? "#ffffff" : "#2B299E",
                      borderRadius: 14 / 2,
                    }}
                  ></View>
                </TouchableOpacity>

                <TEXT
                  title="From Date"
                  size={14}
                  color={Textcolor.blacktext}
                  // weight={'bold'}
                />
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  width: "50%",
                  borderColor: "rgba(226, 226, 226, 1)",
                  paddingBottom: Platform.OS == "android" ? 0 : 15,
                }}
              >
                <TextInput
                  placeholder="08 / 01 / 2022"
                  placeholderTextColor="rgba(0, 0, 0, 1)"
                  value={effetdate}
                  onChangeText={(value) => DateValidation(value, "effetdate")}
                  keyboardType="number-pad"
                  style={{ fontSize: 14, color: Textcolor.blacktext }}
                  editable={effect ? false : true}
                  maxLength={10}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              width: "100%",
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <Bottom
              handlebutton={props.handlebutton}
              contiue="in2add"
              back="company"
              style={{ justifyContent: "space-evenly"}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  triAngle: {
    //top: 95,
    // left: 125,
    //  position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Textcolor.bluetext,
  },
  triangle2: {
    backgroundColor: "pink",
  },
});
