import React, { useState, useEffect } from "react";
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
  Keyboard,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Textcolor } from "../../../../Utility/Colors";
import { Icon } from "react-native-elements";
import { TEXT } from "../../../../Component/Text";
import { useDispatch } from "react-redux";
//component
import { Bottom } from "../Todo/buttoncontainer";

export const Company = (props) => {
  const dispatch = useDispatch();
  const {  cfId,setCfId } = props;
  const [otherCompanies, setOtherCompanies] = useState("");
  const [keysdata, setKeys] = useState([]);
  const [keysForMap, setKeysForMap] = useState([]);



  const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    function fetchData() {
      let response = props?.otherCompanyDetails?.companies;
      setOtherCompanies(response);
      if (otherCompanies != undefined) {
        var key = Object.keys(otherCompanies);
        setKeys(key);
        setKeysForMap(key);
      }
    }

    fetchData();
  }, [otherCompanies]);

  const navigation = useNavigation();

  const [checkvalue, setCheckvalue] = useState([]);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  

  const handleSearch = (queryText) => {
    {
      data.map((item, i) => {
        setSearchdata(item.title);
      });
    }
    setShowsearch(true);
    let filteredData = data.filter(function (item) {
      const itemdata = `${item.title.toUpperCase()}`;
      const itemtext = queryText.toUpperCase();
      return itemdata.includes(itemtext);
    });

    if (filteredData == null) {
      setShowsearch(false);
    } else {
    }
    setSearchdata(filteredData);

    if (filteredData.length == 0) {
      setShowsearch(false);
    }

    if (queryText.length == 0) {
      setShowsearch(false);
    }
  };
  const filterData = (itemData) => {
    setModalVisible(!modalVisible);
    var key = Object.keys(otherCompanies).filter((item) => item == itemData);
    console.log("keysfilter", key);
    setKeys(key);
  };







  const selectedvalue = (name, id) => {
    const arr = checkvalue;

    if (!arr.includes(id)) {
      arr.push(id); //adding to array because value doesnt exists
    } else {
      arr.splice(arr.indexOf(id), 1); //deleting
    }
    console.log("arr=>",arr)

    // dispatch({
    //   type: "FORMID",
    //   payload: arr,
    // });

    setCheckvalue(arr)
    // setCfId(id)
    // props.setCfId(checkvalue);
      forceUpdate()
  };



  const BankOptionUI = (props) => {
    const { item } = props;
  
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          // borderWidth:5,
          marginTop: 5,
        }}
      >
        <View style={{}}>
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
            onPress={() => {
              console.log(item?.FormID)
              setCfId([ ...cfId , item?.FormID])
              selectedvalue(item?.CompNameFrontend, item?.FormID);
            }}
          >
            {checkvalue?.map((item2) =>
              item?.FormID == item2 ? (
                <View
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor:
                      item?.FormID == item2 ? "#2B299E" : "#ffffff",
                    borderRadius: 14 / 2,
                  }}
                ></View>
              ) : null
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#A4A4A4",
              opacity: 0.2,
              borderRadius: 49 / 2,
              height: 49,
              width: 49,
            }}
          ></View>
        </View>
        <View
          style={{
            marginLeft: 15,
            flex: 1,
          }}
        >
          <View
            style={
              {
                // borderWidth: 1
              }
            }
          >
            <TEXT
              title={item?.CompNameFrontend ?? ""}
              size={16}
              color={Textcolor.blacktext}
              family="Roboto-Black"
              numline={1}
            />
          </View>

          {/* <View
            style={{
              marginTop: 5,
            }}
          >
            <TEXT
              title={item?.BusFunID ?? ""}
              size={12}
              color={"rgba(191,191,191,1)"}
              family="Roboto-Regular"
              numline={1}
            />
          </View> */}
        </View>

        {item && !item.checkvalue && (
          <View
            style={{
              width: "20%",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity>
              <Icon name="arrowright" type="antdesign" size={15} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            width: "100%",
            alignContent: "center",
            padding: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                marginLeft: "1%",
              }}
            >
              <TEXT
                title={"Other Companies"}
                size={16}
                color={Textcolor.blacktext}
                family="Roboto-Black"
              />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "30%",
                justifyContent: "flex-end",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon
                color="rgba(164, 164, 164, 1)"
                name="filter"
                type="antdesign"
                size={12}
              />
              <TEXT
                size={12}
                title="Filter"
                color="rgba(164, 164, 164, 1)"
                family="Roboto-Regular"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
          {modalVisible && (
            <View style={styles.modal}>
              {keysForMap?.map((item) => (
                <TouchableOpacity
                  style={{ width: "100%", padding: 2 }}
                  onPress={() => filterData(item)}
                >
                  <TEXT
                    size={9}
                    title={item}
                    color="rgba(164, 164, 164, 1)"
                    family="Roboto-Regular"
                    style={{ marginLeft: 5 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View
            style={{
              marginTop: 15,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "rgba(70, 88, 131, 0.04)",
              paddingBottom: 15,
            }}
          >
            {keysdata?.map((item) => (
              <View>
                <View
                  style={{
                    marginLeft: "1%",
                  }}
                >
                  <TEXT
                    title={item ? item : ""}
                    size={16}
                    color={Textcolor.blacktext}
                    family="Roboto-Black"
                  />
                </View>
                {otherCompanies[item].map((item) => (
                  <BankOptionUI item={item} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: isKeyboardVisible == true ? "50%" : "35%",
          backgroundColor: "rgba(43, 41, 158, 1)",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 40,
            width: "87%",
            backgroundColor: "white",
            flexDirection: "row",
            borderRadius: 10,
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Icon
            color="rgba(183, 190, 198, 1)"
            name="search1"
            type="antdesign"
            size={15}
          />
          <TextInput
            style={{
              paddingLeft: 10,
              fontSize: 14,
              color: "black",
            }}
            placeholder={"Search for Company.."}
            placeholderTextColor="rgba(183, 190, 198, 1)"
          ></TextInput>
        </View>
        <View style={{ width: "87%" }}>
          <Bottom
            handlebutton={props.handlebutton}
            Company={true}
            contiue="c2f"
            style={{ justifyContent: "space-between" }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  triAngle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Textcolor.bluetext,
  },
  triangle2: {
    backgroundColor: "pink",
  },
  modal: {
    right: "2%",
    position: "absolute",
    // borderWidth: 5,
    width: "30%",
    padding: 5,
    backgroundColor: "white",
    zIndex: 1,
    borderRadius: 10,
    shadowColor: "rgba(70, 88, 131, 0.13)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 25,
    padding: 10,
    marginTop: 50,
  },
});
