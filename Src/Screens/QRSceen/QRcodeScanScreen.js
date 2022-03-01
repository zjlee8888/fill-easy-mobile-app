import React, { useState } from "react";
import { View, Text, TextInput, Platform } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

import { Backgroundcolor} from '../../Utility/Colors'
import { Cirle } from '../../Component/Cirle'
const QrcodeScreen = () => {
  const [data, setdata] = useState("");
  const onSuccess = (e) => {
    setdata(e.data);
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{ width: "100%", height: "25%", backgroundColor: "#52AF8A" }}
      ></View>
      <View style={{width:'100%',height:'50%',borderWidth:5}}>
        <QRCodeScanner
          reactivate={true}
          showMarker={true}
          customMarker={
             <View style={{ width: "100%", height: "100%",marginTop:Platform.OS=='ios'?"12%":"0"}}>
              <View
                style={{
                  height: "20%",
                  width: "20%",
                  marginLeft: "10%",
                  borderLeftColor: "#FED200",
                  borderLeftWidth: 5,
                  borderTopColor: "#FED200",
                  borderTopWidth: 5,
                  borderTopLeftRadius: 25,
                }}
              ></View>
              <View
                style={{
                  height: "20%",
                  width: "15%",
                  marginLeft: "10%",
                  borderRightColor: "#FED200",
                  borderRightWidth: 5,
                  borderTopColor: "#FED200",
                  borderTopWidth: 5,
                  borderTopRightRadius: 25,
                  position: "absolute",
                  right: "10%",
                }}
              ></View>
              <View
                style={{
                  height: "20%",
                  width: "15%",
                  marginLeft: "10%",
                  borderBottomColor: "#FED200",
                  borderBottomWidth: 5,
                  borderRightColor: "#FED200",
                  borderRightWidth: 5,
                  borderBottomRightRadius: 25,
                  position: "absolute",
                  bottom: "15%",
                  right: "10%",
                }}
              ></View>
              <View
                style={{
                  height: "20%",
                  width: "15%",
                  marginLeft: "10%",
                  borderBottomColor: "#FED200",
                  borderBottomWidth: 5,
                  borderLeftColor: "#FED200",
                  borderLeftWidth: 5,
                  borderBottomLeftRadius: 25,
                  position: "absolute",
                  bottom: "15%",
                }}
              ></View>
            </View>
          }
          onRead={onSuccess}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: "25%",
          backgroundColor: "#52AF8A",
          bottom: 0,
          position: "absolute",
        }}
      >
        <View style={{width:'90%',height:'15%',backgroundColor:'white',marginVertical:'5%',marginHorizontal:'4%'}}>
          
        </View>
      </View>
    </View>
  );
};
export default QrcodeScreen;
