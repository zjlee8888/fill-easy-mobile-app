import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Textcolor } from "../../../../Utility/Colors";
import { Header } from "../../Component/Screeheader";
import { TEXT } from "../../../../Component/Text";
import { Icon } from "react-native-elements";
import { BUTTON } from "../../../../Component/Button";
import { Fillin } from "./Fillin";
import { FillAccount } from "./FillAccount";
import { useDispatch, useSelector } from "react-redux";

import { Bottom } from "../Todo/buttoncontainer";
export const FillinAddress = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [open, setOpen] = useState(["Fill-address", "Fill-in", "Fill-Account"]);
  const [Adress, setAdress] = useState(false);
  const [addressfill, setAddressfill] = useState("Change Residential Address");

  const [flatnumber, setFlatnumber] = useState("");
  const [floor, setFloor] = useState("");
  const [block, setBlock] = useState("");
  const [building, setBuilding] = useState("");
  const [estate, setEstate] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [chinese, setChinese] = useState("");
  const [formFilledData, setformFieldData] = useState("");
  const [formData, setFormData] = useState([]);
  const [idtype, setIdtype] = useState({});
  //const [inputs, setInputs] = useState({});

  const { selected } = props;
  const dynamicformGenrate = useSelector(
    (state) => state.formReducer.dynamicFormGenrate
  );


  useEffect(() => {
    convertData();
  }, [formFilledData]);

  // const onchangeHandle =(text,item)=>{
  //   setInputs(state => ({...state,[item]:text}))
  // }

  const selectionValue= (item2,index,fieldName)=>{
    setIdtype(state=>({...state,[fieldName]:item2}))
  }

  const convertData = () => {
    let obj = dynamicformGenrate;
    let option = {};
    let covertdataobject = [];


  
    if (obj.length === 0) {

    } else {

      const arr = Object.values(obj["formfields"][selected]);

     
      const updatedArr = arr.map((el, index) => {
        const fieldName = Object.keys(el);
        const Values = Object.values(el);

        if (Values[1][0] == "RADIO BUTTONS") {
          var length = Object.values(Object.values(el)[2]).length - 2;
          option = Object.values(Object.values(el)[2]);
          option.splice(length, 2);
        } else {
          option = "";
        }
        if (fieldName.length < 4) {
          covertdataobject.push([
            {
              type: Values[1][0],
              fieldName: fieldName[0],
              placeholder: Values[0]["placeholder"],
              sentence_description: Values[0]["sentence_description"],
              opction: option,
            },
          ]);
        } else {
          let length = Object.keys(el).length - 3;
          let Startfieldname = fieldName.splice(length, 3);
          let endfieldname = fieldName.splice(0, length);
          covertdataobject.push([
            {
              type: Values[1][0],
              fieldName: Startfieldname[0],
              placeholder: Values[0]["placeholder"],
              sentence_description: Values[0]["sentence_description"],
              // opction: option,
            },
            {
              type: Values[4][0],
              fieldName: endfieldname[0],
              placeholder: Values[3]["placeholder"],
              sentence_description: Values[3]["sentence_description"],
              // opction: option,
            },
          ]);
        }
      });
      setFormData(covertdataobject);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ padding: "4%" }}
      >
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            padding: "6%",
            alignItems: "center",
            borderColor: "rgba(226, 226, 226, 1)",
            borderRadius: 22,
            backgroundColor: "#FFFFFF",
            shadowColor: "rgba(0, 0, 0, 0.04)",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.6,
            shadowRadius: 10,
            elevation: 25,
          }}
        >
          {formData.map((item) =>
            item.length <= 1 ? (
              item[0].type == "TEXT FIELD" ? (
                <View
                  style={{
                    width: "100%",
                    borderBottomWidth: 1,
                    borderColor: "#dddddd",
                    paddingVertical: Platform.OS == "android" ? 0 : 10,
                  }}
                >
                  <TEXT
                    title={item[0]?.fieldName}
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  <TextInput
                    placeholder={item[0]?.placeholder}
                    onChangeText={(text) =>
                      onchangeHandle(text, item[0]?.fieldName)
                    }
                    style={{
                      marginTop: Platform.OS == "android" ? 0 : 10,
                      fontSize: 15,
                    }}
                    placeholderTextColor="rgba(0, 0, 0, 0.2)"
                  />
                </View>
              ) : item[0].type == "RADIO BUTTONS" ? (
                <View style={{ width: "100%", marginTop: "4%"}}>
                  <TEXT
                    title={item[0].fieldName}
                    size={14}
                    color="rgba(43, 41, 158, 1)"
                    weight={"bold"}
                  />
                  {item[0].opction.map((item2,index) => (
                        <View
                          style={{
                            flexDirection: "row",
                            // justifyContent: "space-between",
                            alignItems: "center",
                            margin: "2%",
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
                            onPress={() => selectionValue(item2,index,item[0]?.fieldName)}
                          >
                            <View
                              style={{
                                width: 14,
                                height: 14,
                                 backgroundColor:Object.keys(idtype).length===0?"#ffffff":item2 == idtype[item[0].fieldName] ? "#2B299E" : "#ffffff",
                                borderRadius: 14 / 2,
                              }}
                            ></View>
                          </TouchableOpacity>
                          <TEXT
                            title={item2}
                            color={"rgba(0, 0, 0, 1)"}
                            style={{ marginLeft: 8 }}
                          />
                        </View>
                      ))}
                </View>
              ) : item[0].type == "CHECK BOXES" ? (
                <View style={{flexDirection:"row",marginTop:"2%",width:'100%'}}>
                  {item.map((check,index) => (
                    <View style={{flexDirection:'row'}}>
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
                         onPress={() => selectionValue(check,index)}
                      >
                        <View
                          style={{
                            width: 14,
                            height: 14,
                            backgroundColor:Object.keys(idtype).length===0?"pink":check == idtype[item[0].fieldName] ? "#2B299E" : "#ffffff",
                            borderRadius: 14 / 2,
                          }}
                        ></View>
                      </TouchableOpacity>
                      <TEXT
                        title={check.fieldName}
                        size={14}
                        color={Textcolor.bluetext}
                        weight={"bold"}
                        style={{ marginHorizontal:"2%"}}
                      />
                    </View>
                  ))}
                </View>
              ) : null
            ) : item.length <= 6 ? (
              item[0].type == "TEXT FIELD" ? (
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "2%",
                  }}
                >
                  {item.map((text) => (
                    <View style={{ width: "50%" }}>
                      <TEXT
                        title={text.fieldName}
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
                        <TextInput
                          placeholder={text.placeholder}
                          placeholderTextColor="rgba(0, 0, 0, 1)"
                          // value={date}
                          onChangeText={(textdata) =>
                            onchangeHandle(textdata, text.fieldName)
                          }
                          style={{
                            fontSize: 14,
                            color: Textcolor.blacktext,
                          }}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              ) : item[0].type == "RADIO BUTTONS" ? (
                <View>{<Text>radio box2...pending</Text>}</View>
              ) : item[0].type == "CHECK BOXES" ? (
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "5%",
                  }}
                >
                  {item.map((check) => (
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
                        }}
                        // onPress={() => setIdtype(item2)}
                      >
                        <View
                          style={{
                            width: 14,
                            height: 14,
                            backgroundColor: "#ffffff",
                            borderRadius: 14 / 2,
                          }}
                        ></View>
                      </TouchableOpacity>
                      <TEXT
                        title={check.fieldName}
                        size={14}
                        color={Textcolor.bluetext}
                        weight={"bold"}
                        style={{ marginHorizontal:"2%"}}
                      />
                    </View>
                  ))}
                </View>
              ) : null
            ) : null
          )}
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
            handlebutton={props.handlebutton}
            contiue="add2acc"
            back="c2f"
            style={{ justifyContent: "space-evenly" }}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textcontainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#dddddd",
    marginBottom: 2,
    marginTop: 8,
    // paddingVertical:10,
    paddingVertical: Platform.OS == "android" ? 0 : 15,
  },
});
