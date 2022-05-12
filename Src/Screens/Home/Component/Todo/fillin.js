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
import { useDispatch ,useSelector} from "react-redux";
import { Bottom } from "../Todo/buttoncontainer";
export const Fillin = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [open, setOpen] = useState("Fill-in");

  const [effect, setEffect] = useState(true);

  const [date, setDate] = useState("");
  const [Ename, setEname] = useState("");
  const [Gname, setGname] = useState("");
  const [idtype, setIdtype] = useState({});
  const [iddocument, setIddocument] = useState("");
  const [effetdate, setEffectdate] = useState("");
  const [formFilledData, setformFieldData] = useState("");

  const [formData, setFormData] = useState([]);
  const [inputs, setInputs] = useState({});



  const dynamicformGenrate = useSelector((state) => state.formReducer.dynamicFormGenrate);

  useEffect(() => {
    convertData();
  }, [dynamicformGenrate]);

const onchangeHandle =(text,item)=>{

      setInputs(state => ({...state,[item]:text}))
    }
  const convertData = () => {
    let obj = dynamicformGenrate
    let option = {};
    let covertdataobject = [];
    if(obj.length===0)
    {
    
    }
    else{
 
    const arr = Object.values(obj["formfields"]["Basic Information"]);
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

  const DateValidation = (text, field) => {
    if (field == "Date") {
     
      setDate(
        text
          .replace(/^(\d\d)(\d)$/g, "$1/$2")
          .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
          .replace(/[^\d\/]/g, "")
      );
    }

    if (field == "effetdate") {
      setEffectdate(
        text
          .replace(/^(\d\d)(\d)$/g, "$1/$2")
          .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
          .replace(/[^\d\/]/g, "")
      );
    }
  };
  const selectionValue= (item2,index,fieldName)=>{
    setIdtype(state=>({...state,[fieldName]:item2}))
  }
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
            {formData.map((item) =>
              item.length <= 1 ? (
                <View style={{}}>
                  {item[0].sentence_description ? (
                    <View
                      style={{
                        // height: 80,
                        width: "100%",
                        borderTopWidth: 1,
                        paddingTop: 15,
                        borderColor: "#DDDDDD",
                      }}
                    >
                      <TEXT
                        title={item[0].sentence_description}
                        size={9}
                        color={"#A4A4A4"}
                        fontFamily={"Roboto-Regular"}
                      />
                    </View>
                  ) : null}
                  <TEXT
                    title={item[0].fieldName}
                    size={14}
                    color={Textcolor.bluetext}
                    weight={"bold"}
                  />
                  {item[0].type == "TEXT FIELD" ? (
                    <View
                      style={{
                        width: "100%",
                        borderBottomWidth: 0.5,
                        borderColor: "#DDDDDD",
                        paddingVertical: Platform.OS == "android" ? 0 : 12,
                      }}
                    >
                      <TextInput
                        placeholder={item[0].placeholder}
                        placeholderTextColor="rgba(0, 0, 0, 1)"
                        name={item[0].fieldName}
                          value={inputs[item[0].fieldName]}
                       onChangeText={(text)=>onchangeHandle(text,item[0].fieldName)}
                        style={{ fontSize: 14, color: Textcolor.blacktext }}
                        // keyboardType="number-pad"
                        // dataDetectorTypes={true}
                        // maxLength={10}
                      />
                    </View>
                  ) : (
                    <View>
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
                  )}
                </View>
              ) : (
                <View style={{ width: "100%" }}>
                  {item.map((item2) =>
                    item2.sentence_description ? (
                      <View
                        style={{
                          // height: 80,
                          borderTopWidth: 1,
                          paddingTop: 15,
                          borderColor: "#DDDDDD",
                        }}
                      >
                        <TEXT
                          title={item2.sentence_description}
                          size={9}
                          color={"#A4A4A4"}
                          fontFamily={"Roboto-Regular"}
                        />
                      </View>
                    ) : null
                  )}

                  <View
                    style={{
                      flex: 1,
                      width: "100%",
                      marginTop: "5%",
                      flexDirection: "row",
                      marginBottom: "1%",
                      
                    }}
                  >
                    {item.map((item2) => (
                      <View style={{ width: "50%"}}>
                        <TEXT
                          title={item2.fieldName}
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
                            placeholder={item2.placeholder}
                            placeholderTextColor="rgba(0, 0, 0, 1)"
                            value={inputs[item2.fieldName]}
                            onChangeText={(text) =>
                              onchangeHandle(text, item2.fieldName)
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
                </View>
              )
            )}
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
              style={{ justifyContent: "space-evenly" }}
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
  row: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});
