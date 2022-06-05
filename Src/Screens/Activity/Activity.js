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
} from "react-native";
import moment from 'moment'
import Moment from 'react-moment';
import { Textcolor } from "../../Utility/Colors";
import { Backgroundcolor } from "../../Utility/Colors";
import { Header } from "../Home/Component/Screeheader";
import { useDispatch, useSelector } from "react-redux";

import { Bordercolor } from "../../Utility/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TEXT } from "../../Component/Text";
import { getdataActivity } from '../../Helper/Activity'

import { Circle } from "../../Component/Circle";


const ActivityRecord = (props) => {
  const [open, setOpen] = useState([
    "Fill-address",
    "Fill-in",
    "Fill-Account",
    "Form-Download",
    "Activity-Address",
  ]);



  const data = [
    {
      "ID": "1",
      "Service_Line": "Change of Personal Particulars",
      "Note": "temp",
      "Time": "2022-03-06 10:35:06pm",
      "Compname": "HONGKONG & SHANGHAI BANKING CORPORATION LIMITED (THE)"
    },

    {
      "ID": "2",
      "Service_Line": "Change of Personal Particulars",
      "Note": "temp",
      "Time": "2022-03-06 10:35:06pm",
      "Compname": "FUBON BANK (HONG KONG) LIMITED"
    },

  ]


  const Activity = useSelector((state) => state.activityReducer.all_activity);
  console.log("#################", Activity[0])

  const [modalVisible, setModalVisible] = useState(false);

  if (Activity[0] == "error") {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Header />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => getdataActivity()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {


    return (
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "#F2F4F3",
        }}
      >
        <Header />
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              padding: 15,
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <TEXT
                title={"Activity Records"}
                size={16}
                color={Textcolor.blacktext}
                family="Roboto-Black"
              />
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                // height: 50,
                // borderWidth: 1,
                flexDirection: "row",
                marginRight: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              </View>
              {modalVisible && (
                <View
                  style={{
                    height: 70,
                    position: "absolute",
                    marginTop: 30,
                    width: 95,
                    backgroundColor: "white",
                    borderRadius: 8,
                    marginLeft: -48,
                    shadowColor: "rgba(70, 88, 131, 0.13)",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 4,
                    elevation: 25,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity style={{ marginBottom: 5 }}>
                    <TEXT
                      size={9}
                      title="Option 1"
                      color="rgba(164, 164, 164, 1)"
                      family="Roboto-Regular"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginBottom: 5 }}>
                    <TEXT
                      size={9}
                      title="Option 2"
                      color="rgba(164, 164, 164, 1)"
                      family="Roboto-Regular"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginBottom: 5 }}>
                    <TEXT
                      size={9}
                      title="Option 3"
                      color="rgba(164, 164, 164, 1)"
                      family="Roboto-Regular"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={{ zIndex: -1 }}>
            <View
              style={{
                backgroundColor: Backgroundcolor.whiteback,
                paddingTop: 0,
              }}
            >
              {Activity.map((item, i) => {
                const time = item.Time
                const converttime = moment(time, "YYYYMMDD").fromNow()

                return (
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      //  paddingHorizontal: 20,
                      padding: 15,
                      alignItems: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: Bordercolor.darkgrayopborder,

                    }}
                  >
                    <View style={{ width: "10%", alignItems: "center" }}>
                      <Circle />
                    </View>
                    <View style={{ marginLeft: 15, width: "70%" }}>
                      <TEXT
                        title={item.Compname}
                        size={15}
                        color={Textcolor.darkshadetext}
                        style={{ opacity: 0.6899999976158142 }}
                        family="Roboto-Black"
                      />
                      <TEXT
                        title={`(${item.Service_Line})`}
                        size={12}
                        color={Textcolor.grayoptext}
                        family="Roboto-Regular"
                      />
                    </View>

                    <View
                      style={{ flex: 1, marginRight: 0, alignItems: "flex-end", width: "20%" }}
                    >
                      <TEXT
                        title={converttime}
                        size={11}
                        color={Textcolor.darkshadetext}
                        style={{ opacity: 0.6899999976158142 }}
                        family="Roboto-Bold"
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              padding: 20,
            }}
          >
            <TEXT
              title={"This Month"}
              size={16}
              color={Textcolor.blacktext}
              family="Roboto-Black"
            />
          </View>

          <View style={{}}>
            <View
              style={{
                backgroundColor: Backgroundcolor.whiteback,
                paddingTop: 0,
              }}
            >
              {Activity.map((item, i) => {
                const time = item.Time
                const d = new Date();
          
                const a = d.toLocaleDateString()
                let curr_month = ""
                if(a.charAt(1) == "/"){
                  curr_month = `0${a.charAt(0)}`
                }else{
                  curr_month = `${a.charAt(0)}${a.charAt(1)}`
                }
         
                const data_date1 = time.charAt(8)
                const data_date2 = time.charAt(9)
                const final_date = `${data_date1}${data_date2}`

                      const converttime = moment(time, "'YYYYM'MDD").format()
                      const hour = moment(converttime, "mm").fromNow()

                if(final_date == curr_month){
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      // paddingHorizontal: 20,
                      padding: 15,
                      alignItems: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: Bordercolor.darkgrayopborder,
                    }}
                  >
                    <View style={{ width: "10%", alignItems: "center" }}>
                      <Circle />
                    </View>
                    <View style={{ marginLeft: 15, width: "70%" }}>
                      <TEXT
                        title={item.Compname}
                        size={15}
                        color={Textcolor.darkshadetext}
                        style={{ opacity: 0.6899999976158142 }}
                        family="Roboto-Black"
                      />
                      <TEXT
                        title={`${item.Service_Line}`}
                        size={12}
                        color={Textcolor.grayoptext}
                        family="Roboto-Regular"
                      />
                    </View>

                    <View
                      style={{ flex: 1, marginRight: 0, alignItems: "flex-end" }}
                    >


                      {/* <Moment element={Text} >{time1}</Moment> */}
                      <TEXT
                      title={hour}
                      size={11}
                      color={Textcolor.darkshadetext}
                      style={{ opacity: 0.6899999976158142 }}
                      family="Roboto-Bold"
                    />
                    </View>
                  </View>
                );
              }
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default ActivityRecord;
const styles = StyleSheet.create({
  triAngle: {
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
